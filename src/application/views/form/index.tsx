import { useState } from "react";
import { PokemonModel } from "../../models";
import "../form/index.css";

interface IProps {
  pokemon: PokemonModel
  handleChange: (e: any) => void;
  onClickGuardar: () => void;
  onClickCancelar: () => void;
  onSlideChange: (e: any) => void;
  titulo: string;
}


export const PokemonForm = ({ ...props }: IProps) => {
  const { pokemon, handleChange, onSlideChange,  onClickGuardar, onClickCancelar, titulo } = props;

const [fieldCss, setFieldCss]=useState({name:'input',image:'input',hp:'input',type:'input',save:''});


  return (
    <div id="formContainer" >
   
   <h4>{titulo}</h4>
      <div style={{ display: 'flex',justifyContent:'space-around' }}>
        <div style={{ padding: 10 }}>Nombre:  <input
        id="idName"
          type="text"
          value={pokemon?.name}
          placeholder={'Nombre'}
          name="name"
          required={true}
          onChange={handleChange}
          onBlur={()=>{
            setFieldCss({...fieldCss,name:!pokemon?.name?'inputRequired':'input'});
          }}
          className={fieldCss.name}
        />
        </div>


        <div style={{ padding: 10,  }}>Ataque:  <input type="range" min="0" max="100" name="attack"
          value={pokemon?.attack}
          onChange={(e) => onSlideChange(e)}
          step="1" />{pokemon?.attack}

        </div>
      </div>


      <div style={{ display: 'flex',justifyContent:'space-around' }}>
        <div style={{ padding: 10 }}>Imagen:  <input
        id="idImage"
          type="text"
          value={pokemon?.image}
          placeholder={'url'}
          name="image"
          onChange={handleChange}
          className={fieldCss.image}
          onBlur={()=>{
            setFieldCss({...fieldCss,image:!pokemon?.image?'inputRequired':'input'});
          }}
        />
        </div>


        <div style={{ padding: 10,  }}>Defensa:  <input type="range" min="0" max="100" name="defense"
          value={pokemon?.defense}
          onChange={(e) => onSlideChange(e)}
          step="1" />{pokemon?.defense}
        </div>
      </div>
    

      <div style={{ display: 'flex',justifyContent:'space-around' }}>
        <div style={{ padding: 10,marginLeft:40 }}>Hp:  <input
          type="text"
          value={pokemon?.hp}
          placeholder={'Hp'}
          name="hp"
          required={true}
          onChange={handleChange}
          onBlur={()=>{
            setFieldCss({...fieldCss,hp:!pokemon?.hp?'inputRequired':'input'});
          }}
          className={fieldCss.hp}
        />
        </div>


        <div style={{ padding: 10,  }}>Tipo:  <input
          type="text"
          value={pokemon?.type}
          placeholder={'Tipo'}
          name="type"
          required={true}
          onChange={handleChange}
          onBlur={()=>{
            setFieldCss({...fieldCss,type:!pokemon?.type?'inputRequired':'input'});
          }}
          className={fieldCss.type}
        />

        </div>
      </div>


    <div >
      <button id="crearId" disabled={(!pokemon.name || !pokemon.image)} onClick={onClickGuardar} className={(!pokemon.name || !pokemon.image)?"button-inactive":"button"}><i className="fa fa-window-maximize" style={{ paddingRight: 10 }} ></i>Guardar</button>
      <button id="cancelarId" onClick={onClickCancelar}><i className="fa fa-close" style={{ paddingRight: 10 }} ></i>Cancelar</button>
    </div>
  </div>
  )
}