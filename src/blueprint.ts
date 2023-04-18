import { intRandRange } from "./util/rand"
import type Point from "./point"

export default class Blueprint {
  readonly w: number
  readonly h: number
  tiles: Array<Array<number>> = []

  constructor(w: number, h: number) {
    this.w = w
    this.h = h
    this.initializeTiles()
  }

  initializeTiles() {
    for (let y = 0; y < this.h; y++) {
      this.tiles.push([])
      for (let x = 0; x < this.w; x++) {
        // console.log(blueprint.map[y][x]++)

        this.tiles[y].push(0)
      }
    }

    // TODO: look into why this causes all values update together during transformations
    // this.map = Array(this.h).fill(Array(this.w).fill(0))
  }

  forEachPoint(transform: (point: Point) => void): this {
    for (let y = 0; y < this.h; y++) {
      for (let x = 0; x < this.w; x++) {
        transform({ x, y })
      }
    }

    return this
  }

  randomPoint(): Point {
    return { x: intRandRange(0, this.w), y: intRandRange(0, this.h) }
  }

  getAdjacentValues(point: Point) {
    let start: Point = { x: point.x - 1, y: point.y - 1 }
    let end: Point = { x: point.x + 1, y: point.y + 1 }
    let adjacentValues = Array<number>()
    for (let y = start.y; y <= end.y; y++) {
      if (y < 0 || y > this.h - 1) continue

      for (let x = start.x; x <= end.x; x++) {
        if (x < 0 || x > this.w - 1) continue
        // console.log(this.tiles)
        // console.log(y, x)
        adjacentValues.push(this.tiles[y][x])
      }
    }
    console.log(adjacentValues.length)
    return adjacentValues
  }

  isOnMapEdge(point: Point) {
    return (
      point.x === 0 ||
      point.x === this.w - 1 ||
      point.y === 0 ||
      point.y === this.h - 1
    )
  }
  // clearTiles() {
  //   for (let y = 0; y < this.h; y++) {
  //     for (let x = 0; x < this.w; x++) {
  //       this.tiles[x][y] = 0
  //     }
  //   }
  // }
}
