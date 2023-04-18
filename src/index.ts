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

/**********Approach 1 **************/
transformations
  .addRandomRects(rects)
  .normalizeOuterWalls()
  .addWallsAtMapBoundary()
  .addRandomWalls(0.5)

consoleRenderer.render(blueprint)
/**********Approach 2 **************/
//TODO: Draw lines of random length, do multiple iterations
