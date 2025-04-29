import React from "react";
import IMAGENTvMedios from '../../../img/Cursos/Periodismo/PRESENTADOR_TV.webp';
import {NavigationMenu} from '../../../components/NavBar';

export function PresentadorTvMediosDigitales(){
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
                <h1>PRESENTADOR DE TV Y MEDIOS DIGITALES</h1>
            </div>
            <br />
            <div className="container-SectionInfo">
                <div className="text-info-container">
                    <div className="text-box-info">
                        <p>El presentador de televisión es la figura que juega un papel fundamental en el éxito de un programa. En este taller podrás conocer la forma en que se conducen informativos, entretenimiento o cualquier tipo de formato. De esta manera serás un presentador versátil y tus opciones de trabajo serán mucho mayores.</p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">OBJETIVO:</h3>
                        <p>
                        Aprender las técnicas y habilidades necesarias para convertirte en un buen comunicador y conectar con la cámara de televisión, Smartphone; resultando natural y cercano al espectador.
                        </p>
                        <p>
                        Perder el miedo de hablar en público y dominio escénico. Saber las fórmulas y trucos más efectivos para poder conseguir el éxito en un casting de presentadores y locutores.
                        </p>
                        <p>
                        Manejar con seguridad y autoconfianza las presentaciones ante un público, ofreciendo una imagen sólida como oradores.
                        </p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">CONTENIDO:</h3>
                        <ul>
                            <li>Los sonidos y la voz. </li>
                            <li>Características de la voz.</li>
                            <li>Colocación de la voz. </li>
                            <li>Resonadores. Sonidos y fonemas.</li>
                            <li>La lectura y sus clases</li>
                            <li>Lectura improvisada. </li>
                            <li>Dominio escénico. </li>
                            <li>Entonación.</li>
                            <li>Higiene y prevención vocal. </li>
                            <li>Recursos. Medios de apoyo. Respiración</li>
                            <li>El presentador de TV y medios digitales. </li>
                            <li>Disposición ante la cámara.</li>
                            <li>Dicción.</li>
                            <li>Lenguaje audiovisual.</li>
                            <li>Conocimiento esquema corporal. </li>
                            <li>Correcciones estéticas.</li>
                            <li>Postura en noticiario Posición. </li>
                            <li>Memorización e improvisación ante la cámara. </li>
                            <li>Presentación, despedidas, mirada a cámara.</li>
                            <li>Trucos de memorización.</li>
                            <li>Posición de manos y pies. </li>
                            <li>Influencia del entorno como fondo.</li>
                            <li>Entrevistas: Planificación. Eje de situación. </li>
                            <li>Posición del entrevistador</li>
                            <li>El presentador de TV en diferentes entornos.</li>
                            <li>Presentación ante medios digitales.</li>
                        </ul>
                    </div>
                    <br/>
                </div>
                <div className="imagen-info-content">
                    <img src={IMAGENTvMedios} alt="Imagen Oratoria" />
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