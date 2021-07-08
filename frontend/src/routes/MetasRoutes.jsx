import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainMetas from "../pages/Metas/Main";
import InserirMeta from "../pages/Metas/Inserir";
import EditarMeta from "../pages/Metas/Editar";
import ExcluirMeta from "../pages/Metas/Excluir";
import DetalhesMeta from "../pages/Metas/Detalhes";
import MetasPorTime from "../pages/Metas/MetaPorTime";
import Exemplo2 from '../pages/Metas/Grafico/index';

export default function MetasRoute(){
    return(
        <>
            <Switch>
                <Route exact path = {'/metas'} component={MainMetas} />
                <Route exact path = {'/inserirMeta/:id'} component={InserirMeta} />
                <Route path={'/editarMeta/:id'} component={EditarMeta} />
                <Route path={'/excluirMeta/:id'} component={ExcluirMeta} />
                <Route path={'/detalhesMeta/:id'} component={DetalhesMeta}/>
                <Route exact path = {'/metasTime/:id'} component={MetasPorTime} />
                <Route exact path = {'/grafico'} component={Exemplo2} />
            </Switch>
        </>
    )
}