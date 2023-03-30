

import React, { useContext } from "react";
import { catchPokemon, releasePokemon } from "../store/actions";
import { PokemonContext } from "../store/PokemonContext";


const PokemonItem = ({ pokemon }) => {
const { dispatch } = useContext(PokemonContext);

const handleCatch = () => {
    dispatch(catchPokemon(pokemon));
};


const handleRelease = () => {
    dispatch(releasePokemon(pokemon));
 };


return (

<li>
{pokemon.name}{" "}
{pokemon.caught ? (
<button onClick={handleRelease}>-</button>
 ) : (
<button onClick={handleCatch}>+</button>
)}
</li>
);

};


export default PokemonItem;



