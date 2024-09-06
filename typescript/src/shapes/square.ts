import { Shape } from "./shape.js";

function square(sideLen: number): Shape {
    return {
        // sideLen,
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { square }