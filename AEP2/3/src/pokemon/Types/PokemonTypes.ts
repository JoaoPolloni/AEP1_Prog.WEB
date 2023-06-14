import { ObjectId } from "mongoose";



export interface PokemonType{
    name: String,
    types: Array<Object>,
    stats: Array <Object>,
    dex: Number, 
    height: Number,
    weight: Number,
    moves: Array<Object>
}