import React, { useEffect } from "react";
import IMAGENTraining from '../../../img/Cursos/Periodismo/MEDIA_TRAINING.webp';
import {NavigationMenu} from '../../../components/NavBar';

export function MediaTraining(){
    useEffect(() => {
        document.title = "Curso de Media Training | Comunikate Ecuador";
    }, []);
    
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
                <h1>MEDIA TRAINING</h1>
            </div>
            <br />
            <div className="container-SectionInfo">
                <div className="text-info-container">
                    <div className="text-box-info">
                        <p>El Media Training capacita a ejecutivos para comunicarse efectivamente en medios y foros públicos, fortaleciendo mensajes, mejorando la expresión verbal y no verbal, y proyectando imagen y prestigio a través de técnicas y consejos personalizados sobre expresión corporal, voz y protocolo.</p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">OBJETIVO:</h3>
                        <p>
                        Aprenderás técnicas para una expresión efectiva ante los medios y el público, superando el miedo a hablar en público, y adquirirás herramientas para: expresión oral y corporal convincente, comunicación efectiva en entrevistas y conferencias, liderazgo y presencia en escenario, etc.
                        </p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">CONTENIDO:</h3>
                        <ul>
                            <li>¿Por qué tienes que estar frente a los medios de comunicación?</li>
                            <li>Tu Coeficiente Comunicacional</li>
                            <li>Tu voz: Tu principal herramienta</li>
                            <li>Tu lenguaje corporal</li>
                            <li>Tu imagen profesional y protocolo</li>
                            <li>Diseño de Mensajes Clave</li>
                            <li>Tipos de Entrevistadores</li>
                            <li>Arquetipos de Neuromarketing Político</li>
                            <li>Escenarios: Conferencia de Prensa</li>
                            <li>Escenarios: Entrevista de Radio</li>
                            <li>Escenarios: Entrevista de Televisión</li>
                            <li>Escenarios: Entrevista de Medios Digitales (Facebook, Instagram, YouTube)</li>
                            <li>El discurso</li>
                            <li>La entrevista inesperada</li>
                            <li>Manejo de Cris</li>
                            <li>Internet y Redes Sociales</li>
                            <li>Tu reputación: Familia y amigos</li>
                            <li>Conclusiones</li>
                        </ul>
                    </div>
                    <br/>
                </div>
                <div className="imagen-info-content">
                    <img src={IMAGENTraining } alt="Imagen Oratoria" />
                    <div className="info-overlay">
                        <p><strong>MODALIDAD </strong><br />Presencial - virtual</p>
                        <p><strong>MÉTODO EDUCATIVO</strong><br />Técnico - Práctico</p>
                        <p><strong>DURACIÓN</strong><br /> 10 horas pedagógicas</p>
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