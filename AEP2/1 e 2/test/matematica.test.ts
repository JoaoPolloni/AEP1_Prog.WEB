import {describe, expect, test} from '@jest/globals';
import Matemagica from '../src/Classes/Matemagica'


describe('Operações Matemáticas', () => {

    test('Deve somar dois números', () => {
        const matemagica = new Matemagica(1, 2)


        expect(matemagica.getSum()).toBe(3)
    })

    test('Deve subtrair dois números', () => {
        const matemagica = new Matemagica(4, 4)


        expect(matemagica.getSub()).toBe(0)
    })


    test('Deve multiplicar dois números', () => {
        const matemagica = new Matemagica(3, 10)

        expect(matemagica.getMult()).toBe(30)
    })

    test('Deve dividir dois números', () => {
        const matemagica = new Matemagica(8, 4)


        expect(matemagica.getDiv()).toBe(2)
    })

    test('Retorna erro ao invés de um número', () => {
        const matemagica = new Matemagica(1, 1)

        //@ts-ignore
        expect(matemagica.setX('a')).toBe("Por favor insira um valor válido!")
        //@ts-ignore
        expect(matemagica.setY('b')).toBe("Por favor insira um valor válido!")
    })
})