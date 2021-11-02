import { computed, onMounted, reactive, readonly } from '@vue/composition-api'
import { cardsInfo, expansionOrder } from '@/configs/cards'
import { panic } from '@/utils/panic'
import { shuffle } from '@/utils/shuffle'
import { zip } from '@/utils/zip'

export type RandomizerStore = ReturnType<typeof randomizerStore>

export default function randomizerStore () {
  const state = reactive({
    counts: Array.from({ length: 15 }, (_, index) => index ? 0 : 10 as number),
    limit: 10,
    supply: [] as { expansionName: string; kingdomName: string; }[]
  })

  const currentSum = computed(() => state.counts
    .reduce((total, current) => current > 0 ? total + current : total, 0))

  const increment = (index: number) => {
    const current = state.counts[index]
    state.counts.splice(index, 1, current === -1 || currentSum.value < state.limit ? current + 1 : -1)
  }

  const decrement = (index: number) => {
    const current = state.counts[index]
    state.counts.splice(index, 1, current >= 0 ? current - 1 : state.limit - currentSum.value)
  }

  const refresh = () => {
    const supply = []
    const randomPool = []
    let limit = state.limit

    for (const [count, expansion] of zip(state.counts, cardsInfo)) {
      if (count === -1) {
        randomPool.push(...expansion)
      } else {
        supply.push(...shuffle(expansion).slice(0, count))
        limit -= count
      }
    }

    supply.push(...shuffle(randomPool).slice(0, limit))

    state.supply = supply
      .sort(({ expansionName: lName }, { expansionName: rName }) => (expansionOrder.get(lName) ?? panic()) - (expansionOrder.get(rName) ?? panic()))
  }

  const toText = () => {
    return state.supply
      .map(({ expansionName, kingdomName }, index) => `${index + 1}. ${kingdomName} (${expansionName})`)
      .join('\n')
  }

  onMounted(() => refresh())

  return {
    state: readonly(state),
    increment,
    decrement,
    refresh,
    toText
  }
}
