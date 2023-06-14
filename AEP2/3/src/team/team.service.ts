import Team from "./Team";
import { TeamType} from "./Types/TeamTypes";
import {writeFile, readFile} from 'fs/promises'


class TeamService {

    async createTeam(data: TeamType) {

        const pokemons = JSON.parse(await readFile('pokeData.json', "utf-8"))
        
        const result = await Team.create(data)

        let geral = await this.list()

        geral.forEach(equipe => {
            equipe.team.map(pokeName => {
                pokemons.forEach(pokemon => {
                    if(pokeName.name == pokemon[0].name) {
                            pokeName.name = JSON.stringify(pokemon[0])
                    }
                });
            })
        
        });

        writeFile('PokeTeam.json', JSON.stringify(geral, null, 2))
        return geral
        


    }

    async list() {
        const listedTeams = await Team.find()

        return listedTeams
    }

    async find(id) {
        const findedTeam = await Team.findById(id)

        return findedTeam
    }

    async update(id, dataToUpdate: TeamType) {
        const updatedTeam = await Team.findOneAndUpdate({_id: id}, {
            trainerName: dataToUpdate.trainerName,
            team: dataToUpdate.team

        }, {new: true})

        return updatedTeam
    }

    async delete(id) {
        await Team.findOneAndDelete({_id: id})
        return
    }

    async findTrainer(trainerName) {
        const findedTeam = await Team.find({trainerName: trainerName})

        return findedTeam
    }

    async updateByTrainer(trainerName, dataToUpdate: TeamType) {
        const updatedTeam = await Team.findOneAndUpdate({trainerName: trainerName}, {
            trainerName: dataToUpdate.trainerName,
            team: dataToUpdate.team

        }, {new: true})

        return updatedTeam
    }

    async deleteByTrainer(trainerName) {
        await Team.findOneAndDelete({trainerName: trainerName})
        return
    }



}

export default new TeamService()