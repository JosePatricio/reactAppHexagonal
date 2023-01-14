import React from "react";
import { PokemonModel } from "../../models";
import  "../list/index.css";

interface IProps {
  users: Array<PokemonModel>;
  onClickEditar:(item:PokemonModel)=>void;
  onClickEliminar:(item:PokemonModel)=>void;
}

export const PokemonList= ({ ...props }: IProps) => {
  const {users,onClickEliminar,onClickEditar}=props;
  return users.length > 0 ? (<div className="container-list">
      <table style={{width:'800px'}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th>Hp</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
      
          {users.map((user: PokemonModel, index: number) => (
            <tr key={`${index}`}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <img
                  src={String(user.image)}
                  style={{width:30,height:30}}
                />
              </td>
              <td>{user.attack}</td>
              <td>{user.defense}</td>
              <td>{user.hp}</td>
              <td>{user.type}</td>
              <td>
                <div style={{flexDirection:'row'}}>
                <i className="fa fa-edit" style={{padding:10}} onClick={()=>onClickEditar(user)}></i>
                <i className="fa fa-trash" style={{padding:10}} onClick={()=>onClickEliminar(user)}></i>
                </div>
               
              </td>
            </tr>
          ))}

          <tr></tr>
        </tbody>
      </table>
      </div>
  ) : (
    <div >Lista vacia</div>
  );
};
