export function range(start: number, end: number, inclusive = false) {
  let nudge = inclusive ? 1 : 0

  let theRange = []
  for (start; start < end + nudge; start++) {
    theRange.push(start)
  }
  return theRange
}
