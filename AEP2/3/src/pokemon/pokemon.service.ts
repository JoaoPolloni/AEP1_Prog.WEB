import Pokemon from "./pokemon";
import { PokemonType} from "./Types/PokemonTypes";
import {writeFile, readFile} from 'fs/promises'

class PokemonService {

    async createPokemon(data: PokemonType) {
        const result = await Pokemon.create(data)
        return result
    }

    async list() {
        const listedPokemons = await Pokemon.find()

        return listedPokemons
    }

    async find(id) {
        const findedPokemon = await Pokemon.findById(id)

        return findedPokemon
    }

    async update(id, dataToUpdate: PokemonType) {
        const updatedPokemon = await Pokemon.findOneAndUpdate({_id: id}, {
            name: dataToUpdate.name,
            types: dataToUpdate.types,
            status: dataToUpdate.stats,
            dex: dataToUpdate.dex, 
            height: dataToUpdate.height,
            weight: dataToUpdate.weight,
            moves: dataToUpdate.moves
        }, {new: true})

        return updatedPokemon
    }

    async delete(id) {
        await Pokemon.findOneAndDelete({_id: id})
        return true
    }

    async PokeURLs() {

        const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')

        pokemons.json().then(resolve => {
            writeFile('pokeURL.json', JSON.stringify(resolve.results, null, 2))
        })

        const results = JSON.parse(await readFile('pokeURL.json', "utf-8"))

        return results

    }

    async savePokemon() {

        function getRamdomValues(item) {
            const suffledArray = item.sort(() => Math.random() - 0.5)
            const result = suffledArray.slice(0,4)
            return result.map(obj => Object.assign({}, obj))
        }
        
        const pokeListURL = JSON.parse(await readFile('pokeURL.json', "utf-8"))

        const pokeList = pokeListURL.map( async (pokemon) => {
            let url = pokemon.url

            const response = await fetch(url)
            const result = await response.json()

            const pokeType = result.types.map( (typeIn) => {
                return typeIn.type.name
            })

            const pokeStats = result.stats.map((statIndex) => {
                return {
                    statName: statIndex.stat.name,
                    value: statIndex.base_stat
                }
            })

        
            const Ramdmoves = getRamdomValues(result.moves)


            const allmoves = Ramdmoves.map(moves => {
                return {
                    moves: moves.move.name
                }
            })
            

            const pokeData = {
                name: result.forms[0].name,
                types: pokeType,
                stats: pokeStats,
                dex: result.game_indices[9].game_index,
                height: result.height,
                weight: result.weight,
                moves: allmoves

            }
            try {
                const resultado = await Pokemon.insertMany(pokeData)
                return resultado
            } catch (err) {
            }
            
        })
        writeFile('pokeData.json', JSON.stringify( await Promise.all(pokeList), null, 2))
        return await Promise.all(pokeList)
    }

    async saveTypes() {
                
        const pokeList = JSON.parse(await readFile('pokeData.json', "utf-8"))

        let typeList = {}

        pokeList.map(pokemon => {
            for (const element of pokemon[0].types){
                if(element in typeList) {
                }
                else {
                    typeList[element] = []
                }
            }
        })

        pokeList.map(pokemon => {
            for (const element of pokemon[0].types){
                if(typeList[element]) {
                    delete pokemon[0]["types"]
                    typeList[element].push({
                        ...pokemon
                    })
                }
            }
        })

        writeFile('pokeType.json', JSON.stringify(typeList, null, 2))
        
    }

    async findByDex(id) {
        const findedPokemon = await Pokemon.find({dex: id})

        return findedPokemon
    }

    async findByType(type) {
        const findedPokemon = await Pokemon.find({types: type})

        return findedPokemon
    }

    async findByMove(move) {
        const findedPokemon = await Pokemon.find({moves: {moves: move}})

        return findedPokemon
    }


}

export default new PokemonService()