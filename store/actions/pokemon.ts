export const POKEMON_START_LOADING_LIST = "POKEMON_START_LOADING_LIST";
export const POKEMON_SUCCESS_LOADING_LIST = "POKEMON_SUCCESS_LOADING_LIST";
export const POKEMON_ERROR_LOADING_LIST = "POKEMON_ERROR_LOADING_LIST";
export const POKEMON_START_LOADING_LIST_SAGA ="POKEMON_START_LOADING_LIST_SAGA";

export const sagaStartListPokemon = () => {
    return {type: POKEMON_START_LOADING_LIST_SAGA}
}
export const loadPokemonStart = () => {
    return {type: POKEMON_START_LOADING_LIST}
}

export const loadPokemonListSuccess = (pokemons: any) => {
    return {type: POKEMON_SUCCESS_LOADING_LIST, payload: pokemons};
}

export const loadPokemonListError = (error: any) => {
    return {type: POKEMON_ERROR_LOADING_LIST, payload: error};
}


