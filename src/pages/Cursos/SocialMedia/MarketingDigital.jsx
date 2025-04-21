import React from "react";
import IMAGENDeportiva from '../../../img/Cursos/Periodismo/MARKETING_DIGITAL.webp';
import {NavigationMenu} from '../../../components/NavBarCursos';

export function MarketingDigital(){
    return(
        <div>
            <NavigationMenu/>
                        <br />
                        <br />
                        <br />
                        <br />
           <div className="SectionTilteBlack">
                <h1>Social Media</h1>
            </div>
            <div className="SectionTitleOrange">
                <h1>MARKETING DIGITAL</h1>
            </div>
            <br />
            <div className="container-SectionInfo">
                <div className="text-info-container">
                    <div className="text-box-info">
                        <p>El marketing ha experimentado una transformación radical gracias a los avances tecnológicos y la expansión de internet, lo que ha permitido que los canales digitales influyan directamente en el comportamiento del consumidor y los resultados financieros.</p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">OBJETIVO:</h3>
                        <p>
                        Con este curso aprenderás a crear campañas publicitarias efectivas en Facebook, Instagram, WhatsApp, TikTok y Google.
                        </p>
                        <p>
                        Entender cómo utilizar la Inteligencia Artificial en marketing digital.
                        </p>
                        <p>
                        Mejorar la presencia en línea de tu negocio.
                        </p>
                    </div>
                    <div className="text-box-info">
                        <h3 className="title-ObjeInfo">CONTENIDO:</h3>
                        <ul>

                            <h4 style={{ color: 'black' }}>Facebook e Instagram Ads:</h4>
                            <li>Configuración de la Fanpage: General, Mensajes automáticos, Información de la Página, Roles de página, Personas, Sincronización con la cuenta empresarial de Instagram. </li>
                            <li>Configuración y/creación de la de la cuenta empresarial de Instagram, donde se revisa Nombre, Nombre de Usuario, Biografía, Datos de Contacto, Privacidad y Seguridad.</li>
                            <li>Uso del Instagram para realizar posteos e historias de alto impacto. </li>
                            <li>Tipos de campañas Pagadas en Facebook; ventajas y desventajas de cada una de ellas. </li>
                            <li>Administrador de anuncios en Facebook.</li>
                            <li>Segmentación del público objetivo correcto para tener altos resultados: País, Ciudad, Edad, Sexo e Intereses.</li>
                            <li>Creación 100% práctica y real de Campañas en el Administrador de Anuncios de Facebook con los objetivos de Interacción, y Clientes potenciales y Tráfico al WhatsApp, Messenger y Sitio Web.</li>

                            <h4 style={{ color: 'black' }}>Inteligencia Artificial aplicada al Marketing Digital</h4>
                            <li>Introducción a ChatGPT y su aplicación en el marketing digital.</li>
                            <li>¿Qué es un Prompt?</li>
                            <li>Principales Prompt para obtener información útil de nuestro negocio. </li>
                            <li>Cómo utilizar ChatGPT para campañas en Facebook Ads y Google Ads.</li>
                            <li>Herramientas de Inteligencia Artificial para generar imágenes, páginas web y contenido: Midjorney, Leonardo.Ai, Mixo, Fliki, Predis, entre otros.</li>

                            <h4 style={{ color: 'black' }}>TikTok Marketing</h4>
                            <li>Cómo usar TikTok</li>
                            <li>Creación de un perfil optimizado</li>
                            <li>Grabar, Editar y Publicar videos</li>
                            <li>Estrategias de viralización y creación de contenidos.</li>
                            <li>Google Ads</li>

                            <h4 style={{ color: 'black' }}>Campañas pagadas en Google</h4>
                            <li>Tipos de objetivos y campañas en Google Ads: Ventas, Visitas al sitio web, Promoción, Red de Búsqueda, Red de Display.</li>
                            <li>Creación de Campaña en Red de Búsqueda.</li>
                            <li>Creación de anuncios de Google.</li>
                            <li>Tipos de concordancia.</li>
                            <li>Optimizar las campañas con el ingreso de las palabras claves negativas.</li>
                            <li>Mejorar el anuncio con las Extensiones de anuncios: Llamadas, Enlaces del Sitio, Extractos del Sitio, Ubicación.</li>
                            <li>Creación de la cuenta de Google Business.</li>
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