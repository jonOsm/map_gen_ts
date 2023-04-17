import Blueprint from "./blueprint";

interface BlueprintRenderer {
    render: (blueprint: Blueprint) => void
}

export default class ConsoleRenderer implements BlueprintRenderer {
    static instances = 0
    static self: ConsoleRenderer 

    //singleton
    constructor() {
        if (ConsoleRenderer.instances > 0) {
           return ConsoleRenderer.self 
        }
        ConsoleRenderer.instances++
    }

    render(blueprint: Blueprint) {
        for (let row of blueprint.grid) {
            for (let value of row) {
                let fmtValue = value.toString()
                if (value == 0) {
                    fmtValue = '.'
                }
                process.stdout.write(fmtValue)
            }
            process.stdout.write("\n")
        }
    }
}