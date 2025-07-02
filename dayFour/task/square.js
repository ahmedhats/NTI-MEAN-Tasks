import Rectangle from "./rectangle.js";

export default class Square extends Rectangle {
    constructor(side) {
        super(side,side);
        this.name="Square"
    }
}