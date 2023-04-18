import Blueprint from "./blueprint"
import { Rect } from "./shape"
import type Point from "./point"
import { range } from "./util/range"

export class TransformationBuilder {
  blueprint: Blueprint

  constructor(blueprint: Blueprint) {
    this.blueprint = blueprint
  }

  increment(): this {
    //TODO: weird having to pass blueprint back to lambda?
    this.blueprint.forEachPoint(
      ({ x, y }: Point) => this.blueprint.tiles[y][x]++
    )
    return this
  }

  fill(num: number): this {
    //TODO: weird having to pass blueprint back to lambda?
    this.blueprint.forEachPoint(
      ({ x, y }: Point) => (this.blueprint.tiles[y][x] = num)
    )
    return this
  }

  addRandomRects(rects: Rect[]): this {
    for (let rect of rects) {
      let pos = this.blueprint.randomPoint()
      //variation 1 - constrain
      let xMin = Math.max(pos.x, 0)
      let xMax = Math.min(pos.x + rect.size.w, this.blueprint.w - 1)
      let xRange = range(xMin, xMax, true)

      let yMin = Math.max(pos.y, 0)
      let yMax = Math.min(pos.y + rect.size.h, this.blueprint.h - 1)
      let yRange = range(yMin, yMax, true)

      // handles annoying single or double wall only structures
      if (yRange.length < 3 || xRange.length < 3) continue

      for (let y of yRange) {
        for (let x of xRange) {
          let tileVal = this.blueprint.tiles[y][x]
          this.blueprint.tiles[y][x] = tileVal < 2 ? tileVal + 1 : 2
        }
      }
    }

    return this
  }

  normalizeOuterWalls(): this {
    let bp = this.blueprint

    bp.forEachPoint((p: Point) => {
      let currentTileVal = bp.tiles[p.y][p.x]
      let adjacent = bp.getAdjacentValues(p)

      if (currentTileVal === 0) return this

      let nextToZero = adjacent.indexOf(0) > -1
      bp.tiles[p.y][p.x] = nextToZero ? 1 : 2
    })

    return this
  }

  addWallsAtMapBoundary(): this {
    let bp = this.blueprint
    bp.forEachPoint((p: Point) => {
      let currentTileVal = bp.tiles[p.y][p.x]
      let adjacent = bp.getAdjacentValues(p)
      if (currentTileVal === 1 || currentTileVal === 0) return this

      if (bp.isOnMapEdge(p)) {
        bp.tiles[p.y][p.x] = 1
      }
      return this
    })

    return this
  }
}
