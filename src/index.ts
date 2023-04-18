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
transformations.sanityCheck()
consoleRenderer.render(blueprint)

transformations.sanityCheck().sanityCheck()
consoleRenderer.render(blueprint)
