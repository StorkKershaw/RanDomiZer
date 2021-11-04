export function throttle<T extends (...args: any[]) => void> (limit: number, procedure: T) {
  let waiting = false
  return (...args: any[]) => {
    if (!waiting) {
      waiting = true
      setTimeout(() => { waiting = false }, limit)
      procedure(...args)
    }
  }
}
