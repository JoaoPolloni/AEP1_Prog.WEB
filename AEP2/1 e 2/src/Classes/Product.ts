export default class Product {

    private name:string;
    private price:number;
    private qty:number;

    constructor(name: string, price: number, qty: number) {
        this.name = name
        this.price = price
        this.qty = qty
    }

    public getNome() {
        return this.name
    }

    public getValor() {
        return this.price
    }

    public getQtde() {
        return this.qty
    }

    public setNome(name:string) {
        this.name = name
    }

    public setValor(price:number) {
        this.price = price
    }

    public setQtde(qty:number) {
        this.qty = qty
    }
}