import {Schema, model} from 'mongoose'


const TeamSchema = new Schema({
    trainerName: {
        required: true,
        type: String
        
    }, 
    team: [
    {
        name: {
            required: true,
            type: String
        }
    }]
}, {
    timestamps: true
})


export default model('Team', TeamSchema)
