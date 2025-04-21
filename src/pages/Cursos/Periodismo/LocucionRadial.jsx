import React from "react";
import IMAGENLocucion from '../../../img/Cursos/Periodismo/LOCUCIÓN_RADIAL.webp';
import {NavigationMenu} from '../../../components/NavBarCursos';

export function LocucionRadial(){
    return (
        <div>
            <NavigationMenu/>
                        <br />
                        <br />
                        <br />
                        <br />
            <div className="SectionTilteBlack">
                <h1>Periodismo</h1>
            </div>
            <div className="SectionTitleOrange">
                <h1>LOCUCIÓN RADIAL</h1>
            </div>
            <br />
            <div className="container-SectionInfo">
                <div className="text-info-container">
                    <div className="text-box-info">
                        <p>La voz es una de las mayores herramientas que dispone el ser humano. Educada y explotada en todas sus técnicas, puede transformar la comunicación y fijar límites inalcanzables.</p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">OBJETIVO:</h3>
                        <p>
                        Con este curso aprenderás de expresión oral, corporal, adquirir herramientas para ser un orador persuasivo, liderazgo, animador de eventos y locutor.
                        </p>
                        <p>
                        Este curso te permitira adquirir herramientas como tecnicas y practicas para  desombelte como un locutor de radio y cabina. 
                        </p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">CONTENIDO:</h3>
                        <ul>
                            <li>La respiración.</li>
                            <li>Aprendizaje y manejo en función de la voz.</li>
                            <li>Emisión vocal libre de tensiones.</li>
                            <li>La modulación de la voz.</li>
                            <li>La Dicción y Articulación.</li>
                            <li>Oratoria.</li>
                            <li>Detección de vicios del lenguaje y su corrección.</li>
                            <li>Acentuación correcta.</li>
                            <li>Dominio escénico.</li>
                            <li>La lectura en voz alta.</li>
                            <li>Improvisación.</li>
                            <li>Expresión oral. </li>
                            <li>Expresión corporal.</li>
                            <li>Animación de eventos.</li>
                            <li>Manejo de conferencias.</li>
                            <li>Maestro de ceremonias.</li>
                            <li>Locución profesional.</li>
                            <li>Introducción a la locución radial.</li>
                            <li>Locución radial.</li>
                            <li>Géneros radiofónicos.</li>
                            <li>Podcast.</li>
                            <li>La radio tradicional.</li>
                        </ul>
                    </div>
                    <br/>
                </div>
                <div className="imagen-info-content">
                    <img src={IMAGENLocucion} alt="Imagen Oratoria" />
                    <div className="info-overlay">
                        <p><strong>MODALIDAD </strong><br />Presencial - virtual</p>
                        <p><strong>MÉTODO EDUCATIVO</strong><br />Técnico - Práctico</p>
                        <p><strong>DURACIÓN</strong><br /> 20 horas pedagógicas</p>
                        <p><strong>REQUISITOS</strong><br /> Ninguno</p>
                        <p><strong>CERTIFICADO </strong><br /> Avalado por el Ministerio de Educación</p>
                        <p><strong>¿A QUIÉN VA DIRIGIDO EL CURSO? </strong><br />Todo público</p>
                        <p><strong>INSTRUCTORES PROFESIONALES </strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}