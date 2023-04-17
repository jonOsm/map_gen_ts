import Blueprint from "./blueprint"
import ConsoleRenderer from './blueprint_renderer'

class Rect {
  h: number
  w: number
  constructor(h: number, w: number) {
    this.h = h
    this.w = w
  }
}


class Algo {

}

let map = new Blueprint(60, 20)

const consoleRenderer = new ConsoleRenderer()
consoleRenderer.render(map)
