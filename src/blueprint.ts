import { intRandRange } from "./util/rand"
import type Point from "./point"

export default class Blueprint {
  readonly w: number
  readonly h: number
  tiles: Array<Array<number>> = []

  constructor(w: number, h: number) {
    this.w = w
    this.h = h
    this.initializeGrid()
  }

  initializeGrid() {
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

  applyToAllTiles(transform: (blueprint: Blueprint, point: Point) => void) {
    for (let y = 0; y < this.h; y++) {
      for (let x = 0; x < this.w; x++) {
        transform(this, { x, y })
      }
    }
  }

  randomPoint(): Point {
    return { x: intRandRange(0, this.w), y: intRandRange(0, this.h) }
  }

  // clearTiles() {
  //   for (let y = 0; y < this.h; y++) {
  //     for (let x = 0; x < this.w; x++) {
  //       this.tiles[x][y] = 0
  //     }
  //   }
  // }
}
