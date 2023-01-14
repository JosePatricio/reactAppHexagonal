import { PokemonModel } from "../models";
import { IPokemon } from "../../domain/entities";

export function entityToModel(entity:IPokemon):PokemonModel {
    const pokemon:PokemonModel={...entity};
    return pokemon;
}

export function modelToEntity(model:PokemonModel):IPokemon {
    const pokemon:PokemonModel={...model};
    return pokemon;
} 

export function modelsToEntities(models:PokemonModel[]):IPokemon[] {
    const pokemons:PokemonModel[]={...models};
    return pokemons;
} 
export function entitiesToModels(entities:IPokemon[]):PokemonModel[] {
    let pokemons:PokemonModel[]={...entities};
   pokemons= Object.entries(pokemons).map(([key, value]) => (value))
    return pokemons;
}