import React from 'react'
import { Switch, Route } from "react-router-dom";
import Avaliacao from "../pages/Avaliacao";


export default function UsuariosRoute(){
    return(
        <>
            <Switch>
                <Route exact path = {'/avaliacao/:id'} component={Avaliacao} />
            </Switch>
        </>
    )
}