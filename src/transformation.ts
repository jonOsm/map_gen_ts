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
    this.blueprint.applyToAllTiles(
      (blueprint: Blueprint, { x, y }: Point) => blueprint.tiles[y][x]++
    )
    return this
  }

  fill(num: number): this {
    //TODO: weird having to pass blueprint back to lambda?
    this.blueprint.applyToAllTiles(
      (blueprint: Blueprint, { x, y }: Point) => (blueprint.tiles[y][x] = num)
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

      //variation 2(todo) - ignore if out of bounds?
      for (let y of yRange) {
        for (let x of xRange) {
          this.blueprint.tiles[y][x]++
        }
      }
    }

    return this
  }
}
