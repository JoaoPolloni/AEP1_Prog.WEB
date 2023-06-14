import {Request, Response} from 'express'
import PokemonService from './pokemon.service'
import pokemonService from './pokemon.service'

class PokemonController {

    public async create(req: Request, res: Response){
        const Pokemon = await PokemonService.createPokemon(req.body)
        return res.status(200).json(Pokemon)
    }

    async list(req: Request, res: Response) {
        const Pokemons = await PokemonService.list()

        return res.status(200).json(Pokemons)
    }

    async find(req: Request, res: Response) {
        const Pokemon = await PokemonService.find(req.params.id)

        return res.status(200).json(Pokemon)
    }

    async update(req: Request, res: Response) {
        const Pokemon = await PokemonService.update(req.params.id, req.body)

        return res.status(200).json(Pokemon)
    }

    async delete(req: Request, res: Response) {
        await PokemonService.delete(req.params.id)

        return res.status(200).json("Successfully deleted Pokemon!")
    }

    async Pokecreate(req: Request, res: Response) {
        const result = await pokemonService.PokeURLs()
        
        return res.status(200).json(result)
    }

    async SavePokeData(req: Request, res: Response) {
        const result = await pokemonService.savePokemon()
        
        return res.status(200).json(result)
    }

    async savetype(req: Request, res: Response) {
        const pokemon = await pokemonService.saveTypes()

        return res.status(200).json(pokemon)
    }
    
    async findDex(req: Request, res: Response) {
        const Pokemon = await PokemonService.findByDex(req.params.dex)

        return res.status(200).json(Pokemon)
    }

    async findType(req: Request, res: Response) {
        const Pokemon = await PokemonService.findByType(req.params.type)

        return res.status(200).json(Pokemon)
    }

    async findMove(req: Request, res: Response) {
        const Pokemon = await PokemonService.findByMove(req.params.move)

        return res.status(200).json(Pokemon)
    }


}


export default new PokemonController()