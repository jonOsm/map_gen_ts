export default class Blueprint {
  readonly w: number
  readonly h: number
  map: Array<Array<number>> = []

  constructor(w: number, h: number) {
    this.w = w
    this.h = h
    this.initializeGrid()
  }

  initializeGrid() {
    this.map = Array(this.h).fill(Array(this.w).fill(0))
  }
}
