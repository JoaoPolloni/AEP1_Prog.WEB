import {describe, expect, test} from '@jest/globals';
import Produto from '../src/Classes/Produto'
import RandomArray from '../src/Classes/RandomArray'

const produtos:Array<Produto> = [
    new Produto('Caneta', 4.89, 32),
    new Produto('Lápis', 3.29, 45),
    new Produto('Borracha', 0.99, 67),
    new Produto('Cola', 3.99, 3)
]

describe('Trabalhando com valores aleatórios dentro de um array', () => {

    test('Adicionar produto ao array', () => {
        const randomArray = new RandomArray()
        const produto = new Produto('Tesoura', 10.99, 7)
       randomArray.addProductToArray(produto)

        const procutsArrayLength = randomArray.getProductsArrayLength()
        expect(procutsArrayLength).toBeGreaterThan(0)
    })

    test('Gerar um número aleatório', () => {
        const randomArray = new RandomArray()
       randomArray.setProductsArray(produtos)

        const randomNumber = randomArray.generateRandomNumber()
        expect(typeof randomNumber).toBe('number')
    })

    test('Retornar um produto aleatório', () => {
        const randomArray = new RandomArray()
        randomArray.setProductsArray(produtos)

        const randomProduct = randomArray.getRandomProductFromArray()
        expect(randomProduct).toBeInstanceOf(Produto)
    })
})