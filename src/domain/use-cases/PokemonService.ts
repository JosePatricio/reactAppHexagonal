import { entitiesToModels, entityToModel } from "../../application/mappers/pokemonMapper";
import { PokemonRepository } from "../../infrastructure";
import { IPokemon } from "../entities";
import { iCreatePokemon, iDeletePokemon, iGetPokemonById, IGetPokemons, iUpdatePokemon } from "../ports/primaries";
import { UserActionTypes } from "./types";

export class GetPokemons implements IGetPokemons {
    private pokemonRepository: PokemonRepository;
    constructor() {
        this.pokemonRepository = new PokemonRepository();
    }
    execute(page?: number, results?: number): (dispatch: any) => Promise<void> {
        return async dispatch => {
            const {GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAIL} = UserActionTypes
            dispatch({
                type: GET_POKEMON_REQUEST
            })
            try {
               const pokemons: IPokemon[] = await this.pokemonRepository.getPokemons();
               dispatch({
                    type: GET_POKEMON_SUCCESS,
                    payload: entitiesToModels(pokemons)
                })
            } catch (e) {
                dispatch({
                    type: GET_POKEMON_FAIL,
                    e
                })
            }
        }
    }
}

export class GetPokemonById implements iGetPokemonById {
    private pokemonRepository: PokemonRepository;
    constructor() {
        this.pokemonRepository = new PokemonRepository();
    }
    execute(id?: number): (dispatch: any) => Promise<void> {
        return async dispatch => {
            const {GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAIL} = UserActionTypes
            dispatch({
                type: GET_POKEMON_REQUEST
            })
            try {
               const pokemons: IPokemon = await this.pokemonRepository.getPokemonsById(id!);
               console.log('SWEDEN   ',pokemons);
               dispatch({
                    type: GET_POKEMON_SUCCESS,
                    payload:pokemons? [entityToModel(pokemons)]:[]
                })
            } catch (e) {
                dispatch({
                    type: GET_POKEMON_FAIL,
                    e
                })
            }
        }
    }
}

export class CreatePokemon implements iCreatePokemon {
    private pokemonRepository: PokemonRepository;
    constructor() {
        this.pokemonRepository = new PokemonRepository();
    }
    execute(pokemon?: IPokemon): (dispatch: any) => Promise<void> {
        return async dispatch => {
            const {GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAIL} = UserActionTypes
            dispatch({
                type: GET_POKEMON_REQUEST
            })
            try {
               const pokemon_: IPokemon = await this.pokemonRepository.create(pokemon!);
               let pokemons: IPokemon[] =[];
               if(pokemon_){
                 pokemons= await this.pokemonRepository.getPokemons();
               }
               dispatch({
                    type: GET_POKEMON_SUCCESS,
                    payload: entitiesToModels(pokemons)
                })
            } catch (e) {
                dispatch({
                    type: GET_POKEMON_FAIL,
                    e
                })
            }
        }
    }
}

export class UpdatePokemon implements iUpdatePokemon {
    private pokemonRepository: PokemonRepository;
    constructor() {
        this.pokemonRepository = new PokemonRepository();
    }
    execute(pokemon?:IPokemon): (dispatch: any) => Promise<void> {
        return async dispatch => {
            const {GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAIL} = UserActionTypes
            dispatch({
                type: GET_POKEMON_REQUEST
            })
            try {
               const pokemon_: IPokemon = await this.pokemonRepository.update(pokemon!);
               let pokemons: IPokemon[] =[];
               if(pokemon_){
                 pokemons= await this.pokemonRepository.getPokemons();
               }
               dispatch({
                    type: GET_POKEMON_SUCCESS,
                    payload: entitiesToModels(pokemons)
                })
            } catch (e) {
                dispatch({
                    type: GET_POKEMON_FAIL,
                    e
                })
            }
        }
    }
}

export class DeletePokemon implements iDeletePokemon {
    private pokemonRepository: PokemonRepository;
    constructor() {
        this.pokemonRepository = new PokemonRepository();
    }
    execute(id: number): (dispatch: any) => Promise<void> {
        return async dispatch => {
            const {GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAIL} = UserActionTypes
            dispatch({
                type: GET_POKEMON_REQUEST
            })
            try {
              await this.pokemonRepository.delete(id!);

              let pokemons: IPokemon[] =await this.pokemonRepository.getPokemons();

              console.log('RESULTADO  ',pokemons.length);
               dispatch({
                    type: GET_POKEMON_SUCCESS,
                    payload: entitiesToModels(pokemons)
                })
            } catch (e) {
                dispatch({
                    type: GET_POKEMON_FAIL,
                    e
                })
            }
        }
    }
}