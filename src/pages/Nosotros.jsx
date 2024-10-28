// Nosotros.jsx
import React, { useEffect } from "react";
import { NavigationMenu } from "../components/NavBar";
import { QuienesSomos } from "../components/nosotros/quienesSomos";
import { InstructoresComponent } from "../components/nosotros/Instructores";
import { MissionVisionStyled } from "../components/nosotros/MissionVision";
import { Certificaciones } from "../components/nosotros/Certificaciones";
import { Galeria } from "../components/nosotros/Galeria";
import { Footer } from "../components/footer";

export function Nosotros() {
    useEffect(() => {
        // Desplazarse a la sección especificada en el hash
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []); // Solo se ejecuta al montar el componente

    return (
        <div>
            <NavigationMenu />
            <QuienesSomos />
            <br />
            <br />
            <br />
            <br />
            <MissionVisionStyled />
            <div id= "instructores">
                <InstructoresComponent />
            </div>
            <div id="certificados">
                <Certificaciones />
            </div>
            <div id="galeria">
                <Galeria />
            </div>
            <Footer/>  
        </div>
    );
}
