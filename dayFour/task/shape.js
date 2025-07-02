export default class Shape {
    constructor(name) {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate parent class");
        }
        this.name=name;
    }
    area() {
        throw new Error("shape must be specified");
      }
    
      perimeter() {
        throw new Error("shape must be specified");
      }
    
      toString() {
        return `${this.name} => Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
      }
}


