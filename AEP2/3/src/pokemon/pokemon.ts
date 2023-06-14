import {Schema, model} from 'mongoose'


const PokemonSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    types: {
        required: true,   
        type: Array<Object>
    },
    stats: {
     required: true,
     type: Array <Object>
    },
    dex: {
        required: true,
        type: Number
    },
    height:{ 
        required: true,
        type: Number
        
    },
    weight: {
        required: true, 
        type: Number
    },
    moves: {
        required: true,
        type: Array<Object>
    }
}, {
    timestamps: true
})


export default model('Pokemon', PokemonSchema)
