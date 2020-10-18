import instance from '../axios/axios';

const pokemon = 'pokemon'

export const getListPokemon = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const getPokemons_ = await instance.get(`${pokemon}?limit=0&offset=10`);
            if(!getPokemons_) {
                reject(null);
                return;
            }
            resolve(getPokemons_.data.results);
        } catch (error) {
            reject(error)
        }
    })
}