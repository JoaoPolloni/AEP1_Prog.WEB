export default class Matemagica {

    private x: number
    private y: number

    constructor(x: number, y: number) {
        this.x  = x
        this.y = y
    }

    public getSum() {
        return this.Sum()
    }

    public getSub() {
        return this.Sub()
    }

    public getMult() {
        return this.Mult()
    }

    public getDiv() {
        return this.Div()
    }

    public setX(x: Number) {
        if (typeof x != 'number') {
            return "Por favor insira um valor válido!"
        }
        this.x = x
    }

    public setY(y: Number) {
        if (typeof y != 'number') {
            return "Por favor insira um valor válido!"
        }
        this.y = y
    }

    public getX() {
        return this.x
    }

    public getY() {
        return this.y
    }

    private Sum() {
        return this.x + this.y
    }

    private Sub() {
        return this.x - this.y
    }

    private Mult() {
        return this.x * this.y
    }

    private Div() {
        return this.x / this.y
    }
}