import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import caughtPokemonReducer from "./caughtPokemonReducer";


const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    caughtPokemon: caughtPokemonReducer,
});


export default rootReducer;