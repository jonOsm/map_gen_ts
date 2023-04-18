import Blueprint from "./blueprint"
import ConsoleRenderer from "./blueprint-renderer"
import { RectFactory } from "./shape"
import { TransformationBuilder } from "./transformation"

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
let transformations = new TransformationBuilder()
consoleRenderer.render(map)
transformations.sanityCheck(map)
consoleRenderer.render(map)

transformations.sanityCheck(map).sanityCheck(map)
consoleRenderer.render(map)
