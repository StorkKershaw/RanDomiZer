import { range } from '@/utils/range'

export function shuffle<T> (array: T[]) {
  for (const i of range(array.length - 1, 0, -1)) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
