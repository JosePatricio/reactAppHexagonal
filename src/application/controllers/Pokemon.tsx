import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CreatePokemon, DeletePokemon, GetPokemonById, GetPokemons, UpdatePokemon } from "../../domain/use-cases"
import { PokemonModel } from "../models"
import { HeaderForm, PokemonForm, PokemonList } from "../views"
import  "./index.css";

interface pokemonFormI{
  visible:boolean,
  titulo?:string;
  pokemon?:PokemonModel;
  editar?:boolean;
}

export const Pokemon= () => {

 const dispatch = useDispatch()
  // @ts-ignore
  const {  pokemons } = useSelector(({ userReducer }) => userReducer)
  const [searchText, setSearchText] = useState();
  const [formData, setFormData] = useState<pokemonFormI>({visible:false});

  useEffect(() => {
     const getPokemons = new GetPokemons();
     dispatch(getPokemons.execute()); 
 }, []);

  const handleChangeSearch = (e: any) => {

   const { value } = e.target;
    setSearchText(value);
    const getPokemons = new GetPokemonById();
    dispatch(getPokemons.execute(value));
    if(!value){
      const getPokemons = new GetPokemons();
      dispatch(getPokemons.execute()); 
    }  
    
  };
  const handleChange = (e: any) => {
    const { value ,name} = e.target;
     setFormData({
     ...formData,pokemon:{...formData.pokemon,[name]: value}
    });
  };
  const onClickNuevo = () => {
    setFormData({visible:true,editar:false,titulo:'Nuevo pokemon',pokemon:{attack:0,defense:0,name:'',image:'',hp:0,type:'',idAuthor:1}});
  }
  const onClickEditar = (pokemon:PokemonModel) => {
    setFormData({visible:true,editar:true,titulo:'Editar pokemon',pokemon});
  }
  const onClickEliminar = (item:PokemonModel) => {
    var confirmation = window.confirm(`¿Está seguro de eliminar ${item.name}?`);
   if (confirmation) {
    const pokemon = new DeletePokemon();
    dispatch(pokemon.execute(item.id!)); 
   }
  }
  const onClickCancelar = () => {
    setFormData({visible:false,titulo:''});
  }
  const onSlideChange = (e: any) => {
   const { name, value } = e.target;
    setFormData({ ...formData, pokemon: {...formData.pokemon,[name]:value} }); 
   }
  const onClickGuardar=()=>{
   if(formData.editar){
      const pokemon = new UpdatePokemon();
      dispatch(pokemon.execute(formData.pokemon));
    }else{
      const pokemon = new CreatePokemon();
      dispatch(pokemon.execute(formData.pokemon));
    }

}

  return (
    <React.Fragment >
      <div className="container">


        <HeaderForm handleChange={(e)=>handleChangeSearch(e)} onClickNuevo={()=>onClickNuevo()} searchText={searchText!}/>
        
        <PokemonList users={pokemons}  onClickEditar={(e)=>onClickEditar(e)} 
          onClickEliminar={(e)=>onClickEliminar(e)}/>
        
        {formData.visible && 
        <PokemonForm titulo={formData.titulo!} handleChange={(e) => handleChange(e)} 
        onClickCancelar={() => onClickCancelar()} onClickGuardar={() => onClickGuardar()} 
        onSlideChange={onSlideChange} 
          pokemon={formData.pokemon!} />
        }  

      </div>
    </React.Fragment>
  );
}