import { IPokemon } from "../domain/entities";
import { IPokemonRepository } from "../domain/ports/secondaries/iPokemonRepository";

export class PokemonRepository implements IPokemonRepository {
    baseUrl?: string

    constructor() {
        this.baseUrl= "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon/";
    }
    async getPokemonsById(id: number): Promise<IPokemon> {
        let url:string 
        url =`${this.baseUrl}${id}`
        const res = await fetch(url) 
        return res.json()
    }
    async update(pokemon: IPokemon): Promise<IPokemon> {
        const res=await fetch(`${this.baseUrl}${pokemon.id}`, {
            method: "PUT",
            body: JSON.stringify(pokemon),
            headers: {
              'Content-Type': 'application/json',
            }
          })
          return res.json()
    }
    async create(pokemon: IPokemon): Promise<IPokemon> {
          const res = await    fetch(`${this.baseUrl}`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(pokemon)
          }) 
          return res.json()

    }
     async delete(id: number): Promise<void>{
         await fetch(`${this.baseUrl}${id}`, { method: "delete" });

    }
    async getPokemons(): Promise<IPokemon[]> {
        let url:string 
        url =`${this.baseUrl}?idAuthor=1`
        const res = await fetch(url) 
        return res.json()
    }    
}