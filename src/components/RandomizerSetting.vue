<template>
  <b-col md="6">
    <h4>設定</h4>

    <b-table-simple striped small>
      <b-tbody>
        <b-tr
          v-for="([expansion, count], index) in zip(
            expansionNames,
            state.counts
          )"
          :key="`setting-row__${index}`"
        >
          <b-td class="align-middle">{{ expansion }}</b-td>
          <b-td class="px-0 align-middle">
            <b-button
              squared
              variant="outline-danger"
              @click.prevent="increment(index)"
            >
              <b-icon-chevron-double-up />
            </b-button>
          </b-td>
          <b-td class="align-middle" style="min-width: 5rem">{{
            count >= 0 ? count : "Random"
          }}</b-td>
          <b-td class="px-0 align-middle">
            <b-button
              squared
              variant="outline-primary"
              @click.prevent="decrement(index)"
            >
              <b-icon-chevron-double-down />
            </b-button>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </b-col>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api'

import { expansionNames } from '@/configs/cards'
import { RANDOMIZER_KEY } from '@/stores/keys'
import { panic } from '@/utils/panic'
import { zip } from '@/utils/zip'

export default defineComponent({
  setup () {
    const { state, increment, decrement } = inject(RANDOMIZER_KEY) ??
      panic('dependency injection failed')

    return { expansionNames, zip, state, increment, decrement }
  }
})
</script>
