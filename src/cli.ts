import Blueprint from "./blueprint"
import ConsoleRenderer from "./blueprint-renderer"
import {
  Rect,
  RectFactory,
  type ShapeConstraint,
  type ShapeType,
} from "./shape"
import { TILE } from "./tile"
import { BlueprintBuilder } from "./transformation"

const consoleRenderer = new ConsoleRenderer()
const rectFactory = new RectFactory({
  minW: 4,
  maxW: 10,
  minH: 4,
  maxH: 10,
})

if (require.main === module) {
  /**********Algo 1 **************/
  /*** Draw rects, union them, raw perimeter as outer wall, randomize inner wall*/
  const rects = rectFactory.generate(20)
  let blueprint = new Blueprint(40, 20)
  let bpBuilder = new BlueprintBuilder(blueprint)
  console.log("called directly")
  bpBuilder
    .addRandomRects(rects)
    .normalizeOuterWalls()
    .addWallsAtMapBoundary()
    .addRandomWalls(0.5)
  consoleRenderer.render(blueprint)
  /**********Approach 2 **************/
  //TODO: Draw lines of random length, do multiple iterations
}
