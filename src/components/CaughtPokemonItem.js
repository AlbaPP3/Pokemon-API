

import React from "react";


const CaughtPokemonItem = ({ pokemon, dispatch }) => {
const handleRelease = () => {
    dispatch(releasePokemon(pokemon));

};


return (

<li>
{pokemon.name} <button onClick={handleRelease}>Release</button>
</li>
 );

};

export default CaughtPokemonItem;



