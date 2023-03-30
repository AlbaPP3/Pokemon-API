

const CaughtPokemonList = () => {
const { caughtPokemonState, dispatch } = useContext(PokemonContext);

return (
<div>
<h1>Caught Pokemon List</h1>
<ul>
{caughtPokemonState.map((pokemon) => (
<caughtPokemonState key={pokemon.id} pokemon={pokemon} dispatch={dispatch} />
))}
</ul>
<div>
<Link to="/">Pokemon List</Link>
</div>
</div>
 );

};


export default CaughtPokemonList;



