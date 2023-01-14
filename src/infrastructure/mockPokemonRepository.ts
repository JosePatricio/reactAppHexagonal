import { IPokemon } from "../domain/entities";
import { IPokemonRepository } from "../domain/ports/secondaries";

var jsonStringArrayOfTen=`[
    {
        "id": 60,
        "name": "Alakazam",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
        "attack": 50,
        "defense": 50,
        "hp": 100,
        "type": "NA",
        "idAuthor": 1
    },
    {
        "id": 63,
        "name": "Rattata",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
        "attack": 25,
        "defense": 71,
        "hp": 0,
        "type": null,
        "idAuthor": 1
    },
    {
        "id": 80,
        "name": "pikachu",
        "image": "https://img.pokemondb.net/artwork/pikachu.jpg",
        "attack": 100,
        "defense": 65,
        "hp": 100,
        "type": "pokemon",
        "idAuthor": 1
    },
    {
        "id": 91,
        "name": "Alakazam",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
        "attack": 50,
        "defense": 50,
        "hp": 100,
        "type": "NA",
        "idAuthor": 1
    }
]`;


var responseData: IPokemon[] = JSON.parse(jsonStringArrayOfTen)

export default class MockPokemonRepository implements IPokemonRepository {
    
    constructor() {
    }
    getPokemonsById(id: number): Promise<IPokemon> {
        return new Promise((resolve) => {
            resolve(responseData.filter(_=>_.id === id).shift()!)
        })
    }
    update(pokemon: IPokemon): Promise<IPokemon> {
        var foundIndex = responseData.findIndex(x => x.id == pokemon.id);
        responseData[foundIndex] = pokemon;
        const newPokemon:IPokemon=responseData[foundIndex];
        return new Promise((resolve) => {
            resolve(newPokemon)
        })
    }

    create(pokemon: IPokemon): Promise<IPokemon> {
        const newPokemon:IPokemon={...pokemon,id:1};
        return new Promise((resolve) => {
            resolve(newPokemon)
        })

    }
    delete(id: number): void {
        let data=responseData;
        const obj = responseData.filter((obj) => obj.id == id);
        data.filter(_=>_.id!==id).shift();
        if(obj.length==0){
            throw new Error();
        }else{
            data= responseData.filter((obj) => obj.id != id);
        }
    }
    getPokemons(): Promise<IPokemon[]> {
        return new Promise((resolve) => {
            resolve(responseData)
        })
    }
} 



