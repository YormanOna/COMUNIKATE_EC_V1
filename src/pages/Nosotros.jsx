import React from "react";
import {NavigationMenu} from "../components/NavBar";
import {QuienesSomos} from "../components/nosotros/quienesSomos";
import {InstructoresComponent} from "../components/nosotros/Instructores";
import {MissionVisionStyled} from "../components/nosotros/MissionVision";

export function Nosotros() {
    return (
        <div>
            <NavigationMenu />
            <QuienesSomos />
            <br />
            <br />
            <br />
            <br />
            <br />
            <MissionVisionStyled />
            <InstructoresComponent />

        </div>
    );
    }
