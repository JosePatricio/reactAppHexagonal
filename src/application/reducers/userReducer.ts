import { UserActionTypes } from "../../domain/use-cases/types"

// @ts-ignore
const initialState = {
    pokemons: [],
}

export const userReducer = (state = initialState, action: { type: any, payload?: any }) => {
    const {GET_POKEMON_SUCCESS} = UserActionTypes

    switch (action.type) {
        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                pokemons: action.payload
            }
        default:
            return state
    }
}

