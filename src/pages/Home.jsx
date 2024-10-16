import React from "react";
import { FormInscripcion } from "../components/form_Inscripcion";
import { Footer } from "../components/footer";
import {HomeSlider} from "../components/HomeSlider";
import {NavBar} from "../components/NavBar";

export function Home() {
  return (
    <div>
      <NavBar/>
      <HomeSlider/>
      <br />
      <br />
      <h1 className="TituloQuitar">¡Estamos trabajando en nuestra página! Si deseas contactarnos, completa el siguiente formulario.</h1>
      <FormInscripcion />
      <br />
      <br />
      <Footer/>
    </div>
  );
}