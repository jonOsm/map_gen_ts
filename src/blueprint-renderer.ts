import Blueprint from "./blueprint"

interface BlueprintRenderer {
  render: (blueprint: Blueprint) => void
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
    for (let row of blueprint.map) {
      for (let value of row) {
        let fmtValue = value.toString()
        if (value == 0) {
          fmtValue = "."
        }
        process.stdout.write(fmtValue)
      }
      process.stdout.write("\n")
    }
    process.stdout.write("\n".repeat(this.padding))
  }
}
