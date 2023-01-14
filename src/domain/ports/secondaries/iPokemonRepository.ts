import { IPokemon } from "../../entities";

export interface IPokemonRepository {
    
    getPokemons(page?:number, results?:number): Promise<IPokemon[]>
    getPokemonsById(id:number): Promise<IPokemon>
    update(pokemon:IPokemon): Promise<IPokemon>
    create(pokemon:IPokemon): Promise<IPokemon>
    delete(id:number): void
}