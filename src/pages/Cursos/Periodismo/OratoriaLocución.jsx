import React, { useEffect } from "react";
import '../../../styles/Cursos/Periodismo/OratoriaLocucion.css';
import IMAGENOratoria from '../../../img/Cursos/Periodismo/Oratoria_Locución_Profesional.webp';
import {NavigationMenu} from '../../../components/NavBar';

export function OratoriaLocucion() {
    useEffect(() => {
        document.title = "Curso de Oratoria y Locución | Comunikate Ecuador";
    }, []);
    
    return (
        <div style={{overflowX: 'hidden', width: '100%', maxWidth: '100vw'}}>
            <NavigationMenu/>
            <br />
            <br />
            <br />
            <br />
            <div className="SectionTilteBlack">
                <h1>Periodismo</h1>
            </div>
            <div className="SectionTitleOrange">
                <h1>ORATORIA Y LOCUCIÓN PROFESIONAL</h1>
            </div>
            <br />
            <div className="container-SectionInfo">
                <div className="text-info-container">
                    <div className="text-box-info">
                        <p>Una de las mayores herramientas que dispone el hombre es la VOZ, misma que educada y explotada todos sus recursos técnicas, ayudaran a la verdadera formación humana y fijar límites inalcanzables del mismo.</p>
                        <p>Con este curso aprenderás de expresión oral, corporal, perderás el miedo de hablar en un escenario, adquirirás herramientas para ser un buen orador, liderazgo, animador de eventos y locutor.</p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">OBJETIVO:</h3>
                        <p>
                            Con este curso aprenderás de expresión oral, corporal, perderás el miedo de hablar en un escenario, adquirirás herramientas para ser un buen orador, liderazgo, animador de eventos y locutor.
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
                            <li>Comunicación asertiva.</li>
                            <li>Detección de vicios del lenguaje y su corrección.</li>
                            <li>Acentuación correcta.</li>
                            <li>Dominio escénico.</li>
                            <li>Improvisación.</li>
                            <li>Expresión oral.</li>
                            <li>Expresión corporal.</li>
                            <li>Animación de eventos.</li>
                            <li>Manejo de conferencias.</li>
                            <li>Maestro de ceremonias.</li>
                            <li>Locución profesional.</li>
                        </ul>
                    </div>
                    <br/>
                </div>
                <div className="imagen-info-content">
                    <img src={IMAGENOratoria} alt="Imagen Oratoria" />
                    <div className="info-overlay">
                        <p><strong>MODALIDAD </strong><br />Presencial - virtual</p>
                        <p><strong>MÉTODO EDUCATIVO</strong><br />Técnico - Práctico</p>
                        <p><strong>DURACIÓN</strong><br /> 35 horas pedagógicas</p>
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
