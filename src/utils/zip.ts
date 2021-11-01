export function zip<T, U> (...iterables: [Iterable<T>, Iterable<U>]) {
  return {
    * [Symbol.iterator] () {
      const iterators = iterables
        .map((iterable) => iterable[Symbol.iterator]())
      const callback = ([values, hasDone]: [unknown[], boolean], iterator: Iterator<unknown>) => {
        const { value, done } = iterator.next()
        values.push(value)
        return [values, hasDone || done] as [unknown[], boolean]
      }

      while (true) {
        const [values, hasDone] = iterators.reduce(callback, [[], false]) as [[T, U], boolean]
        if (hasDone) {
          break
        }
        yield values
      }
    },

    asArray () {
      return Array.from(this)
    }
  }
}
