export const positionFromEvent = (event: TouchEvent | MouseEvent) => {
  if (event instanceof MouseEvent) {
    const { clientX: x, clientY: y } = event
    return { x, y }
  }

  if (event instanceof TouchEvent && event.touches.length === 1) {
    const { clientX: x, clientY: y } = event.touches.item(0) as Touch
    return { x, y }
  }
}
