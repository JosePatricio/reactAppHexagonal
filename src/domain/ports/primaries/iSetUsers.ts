import { IPokemon } from "../../entities/pokemon";

export interface ISetUsers {
    execute( results?: IPokemon[]): (dispatch: any) => Promise<void>
}