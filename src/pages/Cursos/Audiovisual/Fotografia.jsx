import React, { useEffect } from "react";
import IMAGENDeportiva from '../../../img/Cursos/Audiovisual/FOTOGRAFIA.webp';
import {NavigationMenu} from '../../../components/NavBar';

export function Fotografia(){
    useEffect(() => {
        document.title = "Curso de Fotografía Profesional | Comunikate Ecuador";
    }, []);
    
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
                <h1>FOTOGRAFÍA</h1>
            </div>
            <br />
            <div className="container-SectionInfo">
                <div className="text-info-container">
                    <div className="text-box-info">
                        <p>La fotografía es el arte de plasmar la realidad en imágenes, combinando técnica y creatividad para capturar la esencia de la vida, contar historias, expresar emociones y revelar la belleza y la complejidad del mundo, desde la perspectiva única del fotógrafo. Por eso, este curso está enfocado para personas que quieran aprender a tomar fotografías de forma profesional, aprovechando a utilizar recursos como celulares y/o cámaras profesionales.</p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">OBJETIVO:</h3>
                        <p>
                        Con este curso aprenderás de fotografía de productos, alimentos, iluminación y edición de fotografía, todo esto permitirá que los estudiantes puedan explotar su creatividad en el mundo de la fotografía.
                        </p>
                        <p>
                        Se Proporcionará a los alumnos los conocimientos y técnicas esenciales de la fotografía, desde las reglas de composición y el manejo de la cámara hasta el uso de la iluminación y el proceso de revelado digital. 
                        </p>
                        <p>
                        Al final del curso, los estudiantes serán capaces de aplicar técnicas de composición efectivas, entender y manipular la exposición y la luz para diferentes géneros fotográficos, y realizar el revelado digital de sus imágenes utilizando Adobe Lightroom. 
                        </p>
                    </div>
                    <div className="text-box-info">
                        <ul>

                            <h4 style={{ color: 'black' }}>MÓDULO I:</h4>
                            <li>¿Qué es la fotografía? El arte fotográfico.</li>
                            <li>Las Reglas de la composición fotográfica: 13 reglas básicas de la composición fotográfica; la ley de los tercios; la regla de la mirada; la regla del horizonte.</li>
                            <li>Modos automáticos y semiautomáticos.</li>
                            <li>La exposición de la luz, conceptos básicos de la fotografía: ISO, apertura del diafragma, velocidad de obturación.</li>

                            <h4 style={{ color: 'black' }}>MÓDULO II:</h4>
                            <li>¿Qué es la fotografía de productos?.</li>
                            <li>La sensopercepción visual de la imagen y su lugar en la conceptualización de un producto.</li>
                            <li>Herramientas de iluminación: Reflectores / Difusores / Cajas de luz</li>
                            <li>¿Qué es el Food Styling?</li>
                            <li>Tips y secretos detrás de fotografías efectivas de productos alimenticios.</li>

                            <h4 style={{ color: 'black' }}>MÓDULO III:</h4>
                            <li>Edición fotográfica con lightroom.</li>
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