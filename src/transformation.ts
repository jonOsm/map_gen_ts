import Blueprint from "./blueprint"
import { Rect } from "./shape"

export class TransformationBuilder {
  blueprint: Blueprint

  constructor(blueprint: Blueprint) {
    this.blueprint = blueprint
  }

  sanityCheck(): this {
    this.blueprint.applyToAllTiles(
      (bp: Blueprint, x: number, y: number) => bp.tiles[y][x]++
    )
    return this
  }

  addIntersectingRects(blueprint: Blueprint, rects: Rect[]): this {
    return this
  }
}
