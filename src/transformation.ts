import Blueprint from "./blueprint"
import { Rect } from "./shape"

export class TransformationBuilder {
  private outerLoops(blueprint: Blueprint, transform: Function): this {
    for (let y = 0; y < blueprint.h; y++) {
      for (let x = 0; x < blueprint.w; x++) {
        transform(blueprint, x, y)
      }
    }
    return this
  }

  sanityCheck(blueprint: Blueprint): this {
    return this.outerLoops(
      blueprint,
      (bp: Blueprint, x: number, y: number) => bp.map[y][x]++
    )
  }

  // sanityCheck(blueprint: Blueprint): this {
  //   for (let y = 0; y < blueprint.h; y++) {
  //     for (let x = 0; x < blueprint.w; x++) {
  //       blueprint.map[y][x]++
  //     }
  //   }
  //   return this
  // }

  addIntersectingRects(blueprint: Blueprint, rects: Rect[]): this {
    return this
  }
}
