

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getPokemonSuccess, catchPokemon, releasePokemon } from "../store/actions";
import { PokemonContext } from "../store/PokemonContext";
import api from "../services/api";
import PokemonItem from "./PokemonItem";


const PokemonList = () => {
    const [searchValue, setSearchValue] = useState("");
    const { pokemonState, dispatch } = useContext(PokemonContext);
    

    
    useEffect(() => {
    const getPokemon = async (id) => {
        try {
            const pokemon = await api.getPokemonById(id);
            dispatch(getPokemonSuccess(pokemon));
         } catch (error) {
            console.log(error);
         }
         };
    
    for (let i = 1; i <= 20; i++) {
        getPokemon(i);
         }
        }, [dispatch]);
    
    
    const handleSearch = (event) => {
        setSearchValue(event.target.value.toLowerCase());
    };
    
    
    const filteredPokemon = pokemonState.filter((pokemon) => {
         return pokemon.name.includes(searchValue);
    });
    

    
     return (
    <div>
    <h1>Pokemon List</h1>
    <input type="text" placeholder="Search Pokemon" onChange={handleSearch} />
    <ul>
    {filteredPokemon.map((pokemon) => (
    <PokemonItem key={pokemon.id} pokemon={pokemon} />
    ))}
    </ul>
    <div>
    <Link to="/caught">Caught Pokemon List</Link>
    </div>
    </div>
    );
    };
    
    
    export default PokemonList;


