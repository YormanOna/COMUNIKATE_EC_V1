import React from "react";
import{OficinasIndividuales} from '../components/servicios/OficinasIndividuales';
import { NavigationMenu } from "../components/NavBar";
import{PuestosIndividuales} from '../components/servicios/PuestosIndividuales';
import {ContenidoAdicional } from "../components/servicios/ContenidoAdicional";

export function Servicios(){
    return (
        <div>
            <NavigationMenu />
            <br/>
            <br/>
            <OficinasIndividuales />
            <PuestosIndividuales />
            <ContenidoAdicional />
        </div>
    );
}