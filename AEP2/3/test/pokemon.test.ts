import {describe, expect, test} from '@jest/globals';
import pokemonService from '../src/pokemon/pokemon.service';


describe("Funções disponíveis para o gerenciamento dos pokemons", () => {

    test('Deve criar um pokemon', async () => {

        

        expect( await pokemonService.createPokemon({
            name: 'bulbasaur',
            types: [
                "grass",
                "poison"
                
            ],
            stats:[
                {
                  statName: "hp",
                  value: 45
                },
                {
                  statName: "attack",
                  value: 49
                },
                {
                  statName: "defense",
                  value: 49
                },
                {
                  statName: "special-attack",
                  value: 65
                },
                {
                  statName: "special-defense",
                  value: 65
                },
                {
                  "statName": "speed",
                  "value": 45
                }
              ],
            dex: 1, 
            height: 7,
            weight: 69,
            moves: [
                {
                  moves: "string-shot"
                },
                {
                  moves: "sleep-talk"
                },
                {
                  moves: "headbutt"
                },
                {
                  moves: "solar-beam"
                }
              ],
        })).toBe(Object)

    })

    test('Deve listar todos os pokemons existentes', async() => {

       expect(await pokemonService.list()).toBe(Array<Object>)

    })

    test('Deve encontrar um pokemon existente', async() => {

        expect(await pokemonService.find("644671b284f08d648b1845ec")).toBe(Object)
    })

    test('Deve atualizar um pokemon existente', async() => {
        
        expect(await pokemonService.update("644671b284f08d648b1845ec", {
            name: 'bulbasaur',
            types: [
                "grass",
                "poison"
                
            ],
            stats:[
                {
                  statName: "hp",
                  value: 45
                },
                {
                  statName: "attack",
                  value: 49
                },
                {
                  statName: "defense",
                  value: 49
                },
                {
                  statName: "special-attack",
                  value: 65
                },
                {
                  statName: "special-defense",
                  value: 65
                },
                {
                  "statName": "speed",
                  "value": 45
                }
              ],
            dex: 1, 
            height: 7,
            weight: 69,
            moves: [
                {
                  moves: "string-shot"
                },
                {
                  moves: "sleep-talk"
                },
                {
                  moves: "headbutt"
                },
                {
                  moves: "solar-beam"
                }
              ]})).toBe(Object)
    })
    
    test('Deve deletar um pokemon existente', async() => {

        expect(await pokemonService.delete("644671b284f08d648b1845ec")).toBe(true)
    })

    test('Deve retornar uma lista de pokemons', async() => {

        expect(await pokemonService.PokeURLs()).toBe(Array<Object>)
    })

    test('Deve salvar um pokemon com moves aleatórios', async() => {
        expect(await pokemonService.savePokemon()).toBe(Array<Object>)
    })

    test('Deve salvar todos os pokemons que fazem parte de um tipo', async() => {
        expect(await pokemonService.saveTypes()).toBe(true)
    })

    test('Encontrar um pokemon através do número da pokédex', async() => {
        expect(await pokemonService.findByDex('1')).toBe(Object)
    })

    test('Encontrar um pokemon através do tipo', async() => {
        expect(await pokemonService.findByType('grass')).toBe(Array<Object>)
    })

    test('Encontrar um pokemon através do movimento', async() => {
        expect(await pokemonService.findByMove('solar-beam')).toBe(Array<Object>)
    }) 

})