import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";  


import Home     from './Components/home';
import Pokedex  from './Components/pokedex';
import Detalhes from './Components/detalhes';
import Header   from './Components/header';




function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>

                <Route exact path={"/"}>
                    <Home />
                </Route>

                <Route exact path={"/pokedex"}>
                    <Pokedex />
                </Route>


                <Route exact path={"/detalhes/:nome"}>
                    <Detalhes />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default Router;


