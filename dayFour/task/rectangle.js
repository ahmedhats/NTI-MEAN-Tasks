import Shape from './shape.js';

export default class Rectangle extends Shape{
    constructor(length,width){
        super("Rectangle");
        this.width=width;
        this.length=length;
    }
    area(){
        return this.width*this.length;
    }

    perimeter(){
        return 2*(this.width + this.length);
    }
}