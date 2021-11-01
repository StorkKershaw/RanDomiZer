import { InjectionKey } from '@vue/composition-api'
import { RandomizerStore } from '@/stores/randomizer'

export const RANDOMIZER_KEY: InjectionKey<RandomizerStore> = Symbol('randomizer-store-key')
