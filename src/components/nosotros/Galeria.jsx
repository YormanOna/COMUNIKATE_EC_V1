import React from 'react';
import '../../styles/galeria.css';
import Imagen1 from '../../img/Galeria/1.webp';
import Imagen2 from '../../img/Galeria/2.webp';
import Imagen3 from '../../img/Galeria/3.webp';
import Imagen4 from '../../img/Galeria/4.webp';
import Imagen5 from '../../img/Galeria/5.webp';
import Imagen6 from '../../img/Galeria/6.webp';
import Imagen7 from '../../img/Galeria/7.webp';
import Imagen8 from '../../img/Galeria/8.webp';
import Imagen9 from '../../img/Galeria/9.webp';
import Imagen10 from '../../img/Galeria/10.webp';
import Imagen11 from '../../img/Galeria/11.webp';
import Imagen12 from '../../img/Galeria/12.webp';
import Imagen13 from '../../img/Galeria/13.webp';
import Imagen14 from '../../img/Galeria/14.webp';
import Imagen15 from '../../img/Galeria/15.webp';
import Imagen16 from '../../img/Galeria/16.webp';
import Imagen17 from '../../img/Galeria/17.webp';
import Imagen18 from '../../img/Galeria/18.webp';

export function Galeria () {
    return (
        <section className="container-gallery" id="galeria">
            <div className="header-gallery">
                <h2 className="title-gallery">GALERÍA</h2>
            </div>
            
            <div className="grid-container-gallery">
                <div className="image-box-gallery">
                    <img 
                        src={Imagen1} 
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen2} 
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen3}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen4}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen5}  
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen6}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen7}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen8}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen9}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen10}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen11}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen12}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen13}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen14}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen15}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen16}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen17}
                        className="image-item-gallery"
                    />
                </div>
                <div className="image-box-gallery">
                    <img 
                        src={Imagen18}
                        className="image-item-gallery"
                    />
                </div>   
            </div>
        </section>
    );
};

