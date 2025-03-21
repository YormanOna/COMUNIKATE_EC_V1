// Nosotros.jsx
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { NavigationMenu } from "../components/NavBar";
import { QuienesSomos } from "../components/nosotros/quienesSomos";
import { InstructoresComponent } from "../components/nosotros/Instructores";
import { MissionVisionStyled } from "../components/nosotros/MissionVision";
import { Certificaciones } from "../components/nosotros/Certificaciones";
import { Galeria } from "../components/nosotros/Galeria";
import { Footer } from "../components/footer";

export function Nosotros() {
    const location = useLocation();

    const scrollToHash = () => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        scrollToHash();
    }, [location]);

    return (
        <div>
            <NavigationMenu />
            <QuienesSomos />
            <br />
            <br />
            <br />
            <br />
            <MissionVisionStyled />

            <InstructoresComponent />
            <Certificaciones />
            <Galeria />

            <Footer/>  
        </div>
    );
}
