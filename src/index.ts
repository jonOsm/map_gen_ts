import Blueprint from "./blueprint"
import ConsoleRenderer from "./blueprint-renderer"
import { RectFactory } from "./shape"
import { TransformationBuilder } from "./transformation"

const consoleRenderer = new ConsoleRenderer()
const rectFactory = new RectFactory({
  minW: 3,
  maxW: 7,
  minH: 2,
  maxH: 9,
})

const rects = rectFactory.generate(30)
let blueprint = new Blueprint(60, 20)
let transformations = new TransformationBuilder(blueprint)
consoleRenderer.render(blueprint)
// transformations.increment()
// consoleRenderer.render(blueprint)

// transformations.fill(8)
// consoleRenderer.render(blueprint)
transformations.addRandomRects(rects)
consoleRenderer.render(blueprint, true)
transformations.normalizeOuterWalls()
consoleRenderer.render(blueprint, false, "-")

// setInterval(function () {
//   transformations.addRandomRects(rects)
//   consoleRenderer.render(blueprint)
//   transformations.fill(0)
// }, 1000)
