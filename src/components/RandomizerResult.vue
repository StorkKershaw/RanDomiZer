<template>
  <b-col
    class="randomizer-result"
    md="6"
    @touchstart="increment()"
    @touchend="reset()"
    @touchcancel="reset()"
    @mousedown="increment()"
    @mouseup="reset()"
    @mouseleave="reset()"
  >
    <h4>サプライ</h4>
    <small>タップしてコピー / ロングタップしてシャッフル</small>

    <b-overlay show :opacity="overlay.opacity">
      <b-table-simple striped>
        <b-tbody>
          <b-tr
            v-for="({ expansionName, kingdomName }, index) in state.supply"
            :key="`result-row__${index}`"
          >
            <b-td style="width: 1rem">{{ index + 1 }}</b-td>
            <b-td style="width: 2rem">{{ expansionName }}</b-td>
            <b-td style="width: 7rem">{{ kingdomName }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>

      <template #overlay>
        <vue-ellipse-progress
          :size="70"
          line="square"
          thickness="5%"
          animation="default 0 0"
          :color="overlay.circleColor"
          :empty-color="overlay.circleEmptyColor"
          :progress="interaction.current"
          :legend="false"
        />
      </template>
    </b-overlay>
  </b-col>
</template>

<script lang="ts">
import { computed, defineComponent, inject, reactive } from '@vue/composition-api'

import { RANDOMIZER_KEY } from '@/stores/keys'
import { panic } from '@/utils/panic'

export default defineComponent({
  setup (props, { root }) {
    const { state, refresh, toText } = inject(RANDOMIZER_KEY) ??
      panic('dependency injection failed')

    const interaction = reactive({
      current: 1,
      delay: 20,
      timer: null as ReturnType<typeof setTimeout> | null
    })

    const overlay = computed(() => {
      const circleAlpha = (interaction.current / 100).toFixed(2)
      return {
        circleColor: `rgba(25, 181, 254, ${circleAlpha})`,
        circleEmptyColor: interaction.current > 1 ? '#e6e9f0' : 'rgba(255, 255, 255, 0)',
        opacity: interaction.current > 1 ? '0.3' : '0'
      }
    })

    const increment = () => {
      interaction.timer = setInterval(() => {
        if (interaction.delay > 0) {
          interaction.delay--
        } else {
          const current = interaction.current
          const delta = Math.max(1, current * 0.07)
          if (current < 100) {
            interaction.current = Math.min(100, current + delta)
          }
        }
      }, 20)
    }

    const reset = () => {
      if (interaction.timer !== null) {
        clearTimeout(interaction.timer)
        interaction.timer = null
      }
      if (interaction.delay < 20 && interaction.current === 1) {
        sendToClipboard()
      }
      if (interaction.current === 100) {
        refresh()
      }
      interaction.current = 1
      interaction.delay = 20
    }

    const sendToClipboard = async () => {
      navigator.clipboard.writeText(toText())
      root.$bvToast.toast('サプライをクリップボードにコピーしました。', {
        solid: true,
        autoHideDelay: 2000,
        noHoverPause: true,
        noCloseButton: true
      })
    }

    return { state, interaction, overlay, increment, reset }
  }
})
</script>
