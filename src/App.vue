<template>
  <div id="app">
    <b-container>
      <b-row>
        <randomizer-result />
        <randomizer-setting />
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from '@vue/composition-api'

import RandomizerResult from '@/components/RandomizerResult.vue'
import RandomizerSetting from '@/components/RandomizerSetting.vue'

import { RANDOMIZER_KEY } from '@/stores/keys'
import randomizerStore from '@/stores/randomizer'

export default defineComponent({
  components: {
    RandomizerResult,
    RandomizerSetting
  },
  setup () {
    provide(RANDOMIZER_KEY, randomizerStore())
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, "Yu Gothic Medium", "游ゴシック Medium",
    YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", sans-serif;
  -webkit-font-smoothing: antialiased;
  user-select: none !important;
  -webkit-touch-callout: none !important;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
