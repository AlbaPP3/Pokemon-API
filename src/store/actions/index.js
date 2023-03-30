import { GET_POKEMON_SUCCESS, CATCH_POKEMON, RELEASE_POKEMON } from "../types";


export const getPokemonSuccess = (pokemon) => ({
    type: GET_POKEMON_SUCCESS,
    payload: pokemon,
});


export const catchPokemon = (pokemon) => ({
    type: CATCH_POKEMON,
    payload: pokemon,
});


export const releasePokemon = (pokemon) => ({
    type: RELEASE_POKEMON,
    payload: pokemon,
});