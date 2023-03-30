

import { GET_POKEMON_SUCCESS, CATCH_POKEMON, RELEASE_POKEMON } from "../types";


const pokemonReducer = (state = [], action) => {
    switch (action.type) {
        case GET_POKEMON_SUCCESS:
            return [...state, action.payload];
        
        case CATCH_POKEMON:
            return state.map((pokemon) => {

    if (pokemon.id === action.payload.id) {
            return { ...pokemon, caught: true };

    }
    return pokemon;
});

case RELEASE_POKEMON:
    return state.map((pokemon) => {
    if (pokemon.id === action.payload.id) {
    return { ...pokemon, caught: false };
}
return pokemon;
});
default:

 return state;

 }

};

export default pokemonReducer;
