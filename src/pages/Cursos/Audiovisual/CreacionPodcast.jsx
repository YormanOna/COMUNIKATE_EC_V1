import React from "react";
import IMAGENDeportiva from '../../../img/Cursos/Audiovisual/PODCAST.webp';
import {NavigationMenu} from '../../../components/NavBar';

export function CreacionDePodcast(){
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
                <h1>CREACIÓN DE PODCAST</h1>
            </div>
            <br />
            <div className="container-SectionInfo">
                <div className="text-info-container">
                    <div className="text-box-info">
                        <p>Un podcast es la creación y difusión de contenido audiovisual en serie, que combina entretenimiento, información y educación, permitiendo a los oyentes conectarse con historias, ideas y perspectivas únicas, en cualquier momento y lugar. </p>
                        <p>Los creadores de podcast pueden monetizar su contenido y generar ingresos.</p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">OBJETIVO:</h3>
                        <p>
                        Con este curso aprenderás a crear tus podcast desde cero, utilizando recursos de bajo presupuesto, también como recomendaciones técnicas para que puedas difundirlas en las plataformas digitales. 
                        </p>
                        <p>
                        Dirigido a personas que quieran explotar su creatividad a través de generación de contenidos para sus negocios o emprendimientos. Aprende a realizar tu podcast desde cero, participando en todos los niveles de producción de los mismos.
                        </p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">CONTENIDO:</h3>
                        <ul>
                            <li>Qué son los podcast.</li>
                            <li>Cómo generar ideas para tu podcast.</li>
                            <li>Cómo generar un guión para podcast.</li>
                            <li>Recomendaciones técnicas para un buen podcast.</li>
                            <li>Cómo producir un podcast con bajo presupuesto.</li>
                            <li>Grabación de audio y video de tu podcast.</li>
                            <li>Distribución del podcast en YouTube, Spotify y otras plataformas digitales.</li>
                        </ul>
                    </div>
                    <br/>
                </div>
                <div className="imagen-info-content">
                    <img src={IMAGENDeportiva } alt="Imagen Oratoria" />
                    <div className="info-overlay">
                        <p><strong>MODALIDAD </strong><br />Presencial - virtual</p>
                        <p><strong>MÉTODO EDUCATIVO</strong><br />Técnico - Práctico</p>
                        <p><strong>DURACIÓN</strong><br /> 8 horas pedagógicas</p>
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