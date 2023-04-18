import rand from "./util/rand"

export interface ShapeConstraint {
  minW: number
  maxW: number
  minH: number
  maxH: number
}

export type ShapeType = Rect

abstract class Shape {
  abstract size: {}
}

abstract class ShapeFactory {
  abstract constraints: ShapeConstraint
  abstract generate(num_shapes: number): Shape[]
}

export class RectFactory extends ShapeFactory {
  constraints: ShapeConstraint

  constructor(constraints: ShapeConstraint) {
    super()
    this.constraints = constraints
  }

  generate(num_shapes: number): Rect[] {
    let rects: Rect[] = []
    Math.floor(Math.random() * this.constraints.minW)
    for (let i = 0; i < num_shapes; i++) {
      let w = rand.intRange(this.constraints.minW, this.constraints.maxW)
      let h = rand.intRange(this.constraints.minH, this.constraints.maxH)
      rects.push(new Rect(w, h))
    }
    return rects
  }
}

// TODO: convert to object and use interfaces?
export class Rect extends Shape {
  size: { h: number; w: number }
  constructor(h: number, w: number) {
    super()
    this.size = { h, w }
  }
}
