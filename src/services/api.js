const getPokemonById = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return {
        id:data.id,
        name: data.name,
        caught: false,
    };
};
    
    export default { getPokemonById };