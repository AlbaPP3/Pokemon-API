import { CATCH_POKEMON, RELEASE_POKEMON } from "../types";


const caughtPokemonReducer = (state = [], action) => {
  switch (action.type) {
    case CATCH_POKEMON:
        return [...state, action.payload];
    case RELEASE_POKEMON:
        return state.filter((pokemon) => pokemon.id !== action.payload.id);
    default:
    return state;
}
};

export default caughtPokemonReducer;