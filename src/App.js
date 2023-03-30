import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import CaughtPokemonList from "./components/CaughtPokemonList";


const App = () => {
    return (
<Router>
<Switch>
<Route exact path="/" component={PokemonList} />
<Route exact path="/caught" component={CaughtPokemonList} />
</Switch>
</Router>
 );
};

export default App;