import { IPokemon } from "../../entities"

export interface IGetPokemons {
    execute(page?: number, results?: number): (dispatch: any) => Promise<void>
}
export interface iGetPokemonById {
    execute(id: number): (dispatch: any) => Promise<void>
}
export interface iCreatePokemon {
    execute(pokemon: IPokemon): (dispatch: any) => Promise<void>
}
export interface iDeletePokemon {
    execute(id: number): (dispatch: any) => Promise<void>
}
export interface iUpdatePokemon {
    execute(pokemon: IPokemon): (dispatch: any) => Promise<void>
}
