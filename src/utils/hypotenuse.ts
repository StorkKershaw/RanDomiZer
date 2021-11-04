type Position = { x: number; y: number; }

export const hypotenuse = ({ x: sx, y: sy }: Position, { x: tx, y: ty }: Position) => {
  return Math.sqrt((sx - tx) ** 2 + (sy - ty) ** 2)
}
