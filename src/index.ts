import Blueprint from "./blueprint"
import ConsoleRenderer from "./blueprint-renderer"
import { RectFactory } from "./shape"
import { TransformationBuilder } from "./transformation"

const consoleRenderer = new ConsoleRenderer()
const rectFactory = new RectFactory({
  minW: 4,
  maxW: 10,
  minH: 4,
  maxH: 10,
})

const rects = rectFactory.generate(20)
let blueprint = new Blueprint(40, 20)
let transformations = new TransformationBuilder(blueprint)

// transformations.fill(8)
// consoleRenderer.render(blueprint)
transformations.addRandomRects(rects)
consoleRenderer.render(blueprint, true)
transformations.normalizeOuterWalls()
consoleRenderer.render(blueprint, true)
transformations.addWallsAtMapBoundary()
consoleRenderer.render(blueprint)
transformations.addRandomWalls(0.5)
consoleRenderer.render(blueprint)

// transformations.cleanWallArtifacts()
// consoleRenderer.render(blueprint, false)

// setInterval(function () {
// transformations.addRandomRects(rects).normalizeOuterWalls().cleanWallArtifacts()
// consoleRenderer.render(blueprint)
// transformations.fill(0)
// }, 5000)
