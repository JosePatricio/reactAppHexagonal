import "../header/index.css";

interface IProps {
  handleChange: (e: any) => void;
  onClickNuevo: () => void;
  searchText: string;
}


export const HeaderForm = ({ ...props }: IProps) => {
  const { searchText, handleChange, onClickNuevo } = props;

  return (
    <div className="containerHeader">


      <div >
        <h4>Listado de pokemon</h4>
        <div className="wrapper">
          <i className="fa fa-search icon" ></i>
          <input className="inputSearch" type="text"
            value={searchText}
            placeholder={'Buscar por ID'}
            name="name"
            onChange={handleChange}></input>
        </div>
      </div>




      <div style={{}}>

        <button onClick={onClickNuevo}>
          <i className="fa fa-plus" style={{ paddingRight: 10 }} ></i>
          Nuevo</button>
      </div>

    </div>
  )
}