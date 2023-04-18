import Blueprint from "./blueprint"
import { TILE } from "./tile"

interface BlueprintRenderer {
  render: (blueprint: Blueprint) => void
}
const tileChars = {
  [TILE.VOID]: "?",
  [TILE.LAND]: " ",
  [TILE.WALL]: "|",
  [TILE.FLOOR]: ".",
}

export default class ConsoleRenderer implements BlueprintRenderer {
  static instances = 0
  static self: ConsoleRenderer
  padding: number

  //singleton
  constructor(padding = 2) {
    this.padding = padding
    if (ConsoleRenderer.instances > 0) {
      return ConsoleRenderer.self
    }
    ConsoleRenderer.instances++
  }

  render(blueprint: Blueprint) {
    for (let row of blueprint.tiles) {
      for (let value of row) {
        let fmtValue = value in TILE ? tileChars[value as TILE] : "@"

        process.stdout.write(fmtValue)
      }
      process.stdout.write("\n")
    }
    process.stdout.write("\n".repeat(this.padding))
  }
}
