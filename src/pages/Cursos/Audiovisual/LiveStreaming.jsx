import React from "react";
import IMAGENDeportiva from '../../../img/Cursos/Audiovisual/LIVE.webp';
import {NavigationMenu} from '../../../components/NavBarCursos';

export function LiveStreaming(){
    return(
        <div>
            <NavigationMenu/>
                        <br />
                        <br />
                        <br />
                        <br />
            <div className="SectionTilteBlack">
                <h1>AUDIOVISUAL</h1>
            </div>
            <div className="SectionTitleOrange">
                <h1>LIVE STREAMING</h1>
            </div>
            <br />
            <div className="container-SectionInfo">
                <div className="text-info-container">
                    <div className="text-box-info">
                        <p>El Live Streaming es una herramienta clave para las empresas que buscan conectar con su audiencia en tiempo real. </p>
                        <p>Permite transmitir eventos, presentaciones y contenido exclusivo, fomentando el compromiso y la interacción en las redes sociales. </p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">OBJETIVO:</h3>
                        <p>
                        Con este curso aprenderás a realizar transmisiones en vivo desde cero. 
                        </p>
                        <p>
                        Para que puedas transmitir tu propio contenido, podcast, programa radial, programa televisivo digital, etc... a través de las plataformas como: YouTube, Facebook Live, Tik Tok, Twitch.
                        </p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">CONTENIDO:</h3>
                        <ul>
                            <li>¿Qué es el deporte?</li>
                            <li>¿Qué es el periodismo deportivo?</li>
                            <li>¿Es una rama menor del periodismo?</li>
                            <li>¿Quién consume periodismo deportivo y qué espera?</li>
                            <li>La Información Deportiva en Radio, Televisión, Medios Impresos y Digitales.</li>
                            <li>La importancia del periodismo deportivo en los medios de comunicación del mundo.</li>
                            <li>La competencia entre los diferentes formatos. Los estilos.</li>
                            <li>Elementos de un texto deportivo.</li>
                            <li>La entrevista.</li>
                            <li>Importancia de hacer preguntas.</li>
                            <li>El informe y la opinión deportiva.</li>
                            <li>Respiración y Articulación de la voz. </li>
                            <li>Dicción.</li>
                            <li>Proyección de la voz.</li>
                            <li>Intención.</li>
                            <li>Narración Deportiva.</li>
                            <li>La narración para radio y para TV, diferencias y técnicas.</li>
                            <li>Ejercicios de visualización.</li>
                            <li>Comentario deportivo.</li>
                            <li>Borde de campo.</li>
                            <li>Reportero.</li>
                        </ul>
                    </div>
                    <br/>
                </div>
                <div className="imagen-info-content">
                    <img src={IMAGENDeportiva } alt="Imagen Oratoria" />
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