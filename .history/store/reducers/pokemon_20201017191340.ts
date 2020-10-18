import * as ActionTypes from  '../actions/pokemon';

export const updateObject = (oldObject: any, updatedProperties: any) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export interface IInit{
    loading: boolean;
    error: any;
    pokemons: any[];
}

export interface IAction{
    payload: any;
    type: string;
}

const init ={
    
    loading: false,
    pokemons: [],
    error: null
}

const loadingListPokemonStartSaga =(state: IInit, action: IAction) => {
    return updateObject(state, {loading: true})
}

const loadingListPokemonStart =(state: IInit, action: IAction) => {
    return updateObject(state, {loading: true})
}

const loadingListPokemonSuccess =(state: IInit, action: IAction) => {
    return updateObject(state,{loading: false,pokemons: action.payload });
}
const loadingListPokemonError =(state: IInit, action: IAction) => {
    return updateObject(state, {loading: false, pokemons: [], error: action.payload})
}

const reducer = (state = init, action: IAction) => {
    switch (action.type) {
        case ActionTypes.POKEMON_START_LOADING_LIST_SAGA: loadingListPokemonStartSaga(state, action);
        case ActionTypes.POKEMON_SUCCESS_LOADING_LIST: loadingListPokemonSuccess(state, action);
        case ActionTypes.POKEMON_ERROR_LOADING_LIST: loadingListPokemonError(state, action);
        default: return  state ;
            
    }

}

export default reducer;