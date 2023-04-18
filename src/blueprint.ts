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
    for (let y = 0; y < this.h; y++) {
      this.map.push([])
      for (let x = 0; x < this.w; x++) {
        // console.log(blueprint.map[y][x]++)

        this.map[y].push(0)
      }
    }

    // TODO: look into why this causes all values update together during transformations
    // this.map = Array(this.h).fill(Array(this.w).fill(0))
  }
}
