import { ObjectId } from "mongoose";

export interface TeamType{
    trainerName: String, 
    team: [{
        name: String
    }]
}