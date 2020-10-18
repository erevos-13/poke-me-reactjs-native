import * as actions from '../actions/pokemon';
import { getListPokemon, getPokemonInfo } from "../../services/pokemon";
import { put } from 'redux-saga/effects';
import * as Actions from "../actions/pokemon";
import { IInfo, PokemonDTO } from '../../model/pokemon.entity';

export function* pokemonStartLoading() {
    try {
        const pokemons = yield getListPokemon();
        try {
            const apiCallZip: IInfo[] = [];
            const pokemon_: PokemonDTO[] = [];
            pokemons.forEach((element: any, index: any) => {
                pokemon_.push({
                    id: index + 1,
                    url: element.url,
                    name: element.name,
                    image: `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`
                })
            });
            pokemon_.forEach((pok_) => {
                apiCallZip.push(getPokemonInfo(pok_.id))
            })
            const pokemonInfos_ = yield  Promise.all(apiCallZip);
            pokemonInfos_.forEach((_pokemonInfo: IInfo, index: number) => {
                pokemon_[index].info = pokemonInfos_[index];
            });
            yield put(Actions.loadPokemonListSuccess(pokemon_));
        } catch (error) {
            yield put(Actions.loadPokemonListError(error));

        }

    } catch (error) {
        yield put(Actions.loadPokemonListError(error));

    }
}