import Blueprint from "./blueprint"
import ConsoleRenderer from "./blueprint-renderer"
import { type ShapeConstraint, Rect, RectFactory } from "./shape"
class Algo {}

const consoleRenderer = new ConsoleRenderer()
const rectFactory = new RectFactory({
  minW: 3,
  maxW: 7,
  minH: 2,
  maxH: 9,
})
const rects = rectFactory.generate(30)
let map = new Blueprint(60, 20)
console.log(rects)
// consoleRenderer.render(map)
