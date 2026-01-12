import React, { useEffect } from 'react';
import { FormInscripcion } from "../components/form_Inscripcion";
import {NavigationMenu} from "../components/NavBar";
import { Footer } from "../components/footer";

export function Inscribite() {
    useEffect(() => {
        document.title = "Inscríbete | Comunikate Ecuador";
    }, []);
    
    return (
        <div>
            <NavigationMenu/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <FormInscripcion />
            <br />
            <Footer />
        </div>
    );
}