import {Router} from 'express'

import pokemonController from './pokemon/pokemon.controller'
import teamController from './team/team.controller'


const routes = Router()



// Pokemons //
routes.get('/pokemonsURL', pokemonController.Pokecreate)
routes.post('/savepokemons', pokemonController.SavePokeData)
routes.get('/savetype', pokemonController.savetype)
routes.get('/pokemons', pokemonController.list)
routes.get('/pokemonsDex/:dex', pokemonController.findDex)
routes.get('/pokemonsType/:type', pokemonController.findType)
routes.get('/pokemonsMove/:move', pokemonController.findMove)

//  Team  //

routes.post('/teamCreate', teamController.create)
routes.get('/teams', teamController.list)
routes.get('/trainerName/:trainerName', teamController.findTrainer)
routes.put('/trainerName/:trainerName', teamController.updateByTrainer)
routes.delete('/trainerName/:trainerName', teamController.deleteByTrainer)


export default routes