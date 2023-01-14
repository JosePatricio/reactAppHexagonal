import MockPokemonRepository from "../../infrastructure/mockPokemonRepository";

const api = new MockPokemonRepository()

describe("Pokemons UseCases", () => {
    it("Definir api oobtener lista de pokemons", () => {
      expect(api.getPokemons).toBeDefined();
    });
  
    it("Obtener una lista de 4 pokemones", async () => {
        const result = await api.getPokemons()
        let expected = result.length;
        expect(expected).toBeGreaterThan(0);
        expect(expected).toEqual(4); 
    });
    it("Obtener un pokemon por su ID", async()=> {
        const result = await api.getPokemonsById(60);
        let expected = result;
        expect(expected).not.toBeNull()
    });

    it("Crear un pokemon con un nuevo ID", async()=> {
     const newPokemon= {
                  "name": "Alakazam",
                  "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
                  "attack": 50,
                  "defense": 50,
                  "hp": 100,
                  "type": "NA",
                  "idAuthor": 1
                };
      const result = await api.create(newPokemon);
      let expected = result;
      expect(expected.id).toBeDefined();
  });

  
 it("Actualizar nombre de pokemon", async()=> {
  const newPokemon= {
               "id": 80,
               "name": "PIKACHU EDITED",
               "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
               "attack": 50,
               "defense": 50,
               "hp": 100,
               "type": "NA",
               "idAuthor": 1
             };
   const result = await api.update(newPokemon);
   let expected = result;
   expect(expected.name).toEqual("PIKACHU EDITED");
});

it("Buscar y eliminar pokemon por su ID, Error si no lo encuentra", ()=> {
    const pokemonID=60;
    let result =()=>{};
    try {
      api.delete(pokemonID); 
    } catch (error) {
      result= () => {
        throw new TypeError();
      };
    }

    expect(result).not.toThrow();
   
});

  });