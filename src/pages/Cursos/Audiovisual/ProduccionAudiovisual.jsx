import React from "react";
import IMAGENDeportiva from '../../../img/Cursos/Audiovisual/AUDIOVISUAL.webp';
import {NavigationMenu} from '../../../components/NavBar';

export function ProduccionAudiovisual(){
    return(
        <div>
            <NavigationMenu/>
                        <br />
                        <br />
                        <br />
                        <br />
            <div className="SectionTilteBlack">
                <h1>Audiovisual</h1>
            </div>
            <div className="SectionTitleOrange">
                <h1>PRODUCCIÓN AUDIOVISUAL</h1>
            </div>
            <br />
            <div className="container-SectionInfo">
                <div className="text-info-container">
                    <div className="text-box-info">
                        <p>La producción audiovisual es el arte de crear contenido multimedia que combina sonido e imagen para ser transmitido o publicado en diversas plataformas, desde medios de comunicación masiva como radio y televisión hasta redes sociales y plataformas digitales.</p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">OBJETIVO:</h3>
                        <p>
                        Con este curso aprenderás a producir tus contenidos audiovisuales desde cero y de forma profesional, utilizando tu smartphone como herramienta de trabajo para grabar y editar videos para redes sociales, como también conocerás de manejo de cámaras profesionales, iluminación y mucho más.
                        </p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">CONTENIDO:</h3>
                        <ul>
                            <li>¿Qué es la Producción Audiovisual?</li>
                            <li>Características de la Producción Audiovisual.</li>
                            <li>Las etapas y los roles en la Producción Audiovisual: la preproducción, la producción, la postproducción.</li>
                            <li>De la idea al guión. Diferentes tipos y formatos de guiones.</li>
                            <li>
                                <p>¿Cómo se cuenta una historia audiovisual?</p>
                                <p>Diferentes maneras de narrar en dependencia del medio al que esté dirigido el producto audiovisual: cine, televisión, redes sociales.</p>
                            </li>
                            <li>Consideraciones generales para la grabación de videos.</li>
                            <li>El lenguaje audiovisual, el guion técnico y storyboard.</li>
                            <li>La estética de la imagen.</li>
                            <li>¿Qué equipos utilizar? Alternativas de bajo presupuesto.</li>
                            <li>Nociones generales para el manejo de cámara, iluminación y sonido.</li>
                            <li>La posproducción. Conceptos claves de la edición.</li>
                            <li>El proceso de edición en Adobe Premiere.</li>
                            <li>Aplicaciones móviles para edición de video.</li>
                            <li>Inteligencia artificial aplicada a la producción audiovisual.</li>
                            <li>Elaboración de proyecto final.</li>
                        </ul>
                    </div>
                    <br/>
                </div>
                <div className="imagen-info-content">
                    <img src={IMAGENDeportiva } alt="Imagen Oratoria" />
                    <div className="info-overlay">
                        <p><strong>MODALIDAD </strong><br />Presencial - virtual</p>
                        <p><strong>MÉTODO EDUCATIVO</strong><br />Técnico - Práctico</p>
                        <p><strong>DURACIÓN</strong><br /> 30 horas pedagógicas</p>
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