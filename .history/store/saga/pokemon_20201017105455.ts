import * as actions from '../actions/pokemon';
import {getListPokemon} from "../../services/pokemon";
import  {put} from 'redux-saga/effects';
import * as Actions from "../actions/pokemon";

export function* pokemonStartLoading() {
    try {
        const pokemons = yield getListPokemon();
        yield  put(Actions.loadPokemonListSuccess(pokemons));
    } catch (error) {
        yield put(Actions.loadPokemonListError(error));
        
    }
}