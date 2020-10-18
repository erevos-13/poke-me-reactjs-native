import { takeEvery } from "redux-saga/effects";
import * as actions from '../actions/pokemon';
import {pokemonStartLoading} from './pokemon';
export function* watchPokemon() {
    yield takeEvery(actions.POKEMON_START_LOADING_LIST_SAGA,pokemonStartLoading );
}