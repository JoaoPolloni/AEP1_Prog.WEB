import Product from './Product'

export default class RandomArray {

    private productsArray:Array<Product> = [];

    public addProductToArray(produto:Product) {
        this.productsArray.push(produto)
    }

    public getProductsArray() {
        return this.productsArray
    }

    public getProductsArrayLength() {
        return this.productsArray.length
    }

    public setProductsArray(array:Array<Product>) {
        this.productsArray = array
    }

    public generateRandomNumber() {
        return Number(Math.floor(Math.random() * this.productsArray.length))
    }

    public getRandomProductFromArray() {
        const randomNumber = this.generateRandomNumber()
        return this.productsArray[randomNumber]
    }
}