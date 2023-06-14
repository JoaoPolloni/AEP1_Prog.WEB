import {Request, Response} from 'express'
import TeamService from './team.service'

class TeamController {

    public async create(req: Request, res: Response){
        const Team = await TeamService.createTeam(req.body)
        return res.status(200).json(Team)
    }

    async list(req: Request, res: Response) {
        const Teams = await TeamService.list()

        return res.status(200).json(Teams)
    }

    async find(req: Request, res: Response) {
        const Team = await TeamService.find(req.params.id)

        return res.status(200).json(Team)
    }

    async update(req: Request, res: Response) {
        const Team = await TeamService.update(req.params.id, req.body)

        return res.status(200).json(Team)
    }

    async delete(req: Request, res: Response) {
        await TeamService.delete(req.params.id)

        return res.status(200).json("Successfully deleted Team!")
    }

    async findTrainer(req: Request, res: Response) {
        const Team = await TeamService.findTrainer(req.params.trainerName)

        return res.status(200).json(Team)
    }

    async updateByTrainer(req: Request, res: Response) {
        const Team = await TeamService.updateByTrainer(req.params.trainerName, req.body)

        return res.status(200).json(Team)
    }

    async deleteByTrainer(req: Request, res: Response) {
        await TeamService.deleteByTrainer(req.params.trainerName)

        return res.status(200).json("Successfully deleted Team!")
    }

}


export default new TeamController()