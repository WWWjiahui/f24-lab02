import { Shape } from "./shape.js";

function newRectangle(width: number, height: number): Shape {
    return {
        // width,
        // height,
        computeArea: function (): number {
            return width * height
        }
    }
}

export { newRectangle } //Rectangle, 
