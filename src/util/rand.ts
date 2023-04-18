export function intRandRange(min: number, max: number, inclusive = false) {
  let nudge = inclusive ? 1 : 0
  return Math.floor(Math.random() * (max - min + nudge) + min)
}

// export function intRandRangeIncl(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
