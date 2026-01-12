import React, { useState } from 'react';
import '../../styles/galeria.css';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
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
    const images = [
        Imagen1, Imagen2, Imagen3, Imagen4, Imagen5, Imagen6,
        Imagen7, Imagen8, Imagen9, Imagen10, Imagen11, Imagen12,
        Imagen13, Imagen14, Imagen15, Imagen16, Imagen17, Imagen18
    ];

    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const displayedImages = showAll ? images : images.slice(0, 6);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImage(images[index]);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const prevImage = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    };

    React.useEffect(() => {
        if (selectedImage) {
            window.addEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'auto';
        };
    }, [selectedImage, currentIndex]);

    return (
        <section className="container-gallery" id="galeria">
            <div className="header-gallery">
                <h2 className="title-gallery">GALERÍA</h2>
            </div>
            
            <div className="grid-container-gallery">
                {displayedImages.map((image, index) => (
                    <div 
                        key={index} 
                        className="image-box-gallery"
                        onClick={() => openLightbox(index)}
                    >
                        <img 
                            src={image} 
                            alt={`Galería Comunikate ${index + 1}`}
                            className="image-item-gallery"
                        />
                        <div className="overlay-gallery">
                            <span className="view-icon">
                                <i className="fas fa-search-plus"></i> Ver
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {!showAll && images.length > 6 && (
                <div className="show-more-container">
                    <button 
                        className="btn-show-more"
                        onClick={() => setShowAll(true)}
                    >
                        Ver Más Fotos ({images.length - 6}+)
                    </button>
                </div>
            )}

            {showAll && (
                <div className="show-more-container">
                    <button 
                        className="btn-show-less"
                        onClick={() => setShowAll(false)}
                    >
                        Ver Menos
                    </button>
                </div>
            )}

            {/* Modal Lightbox */}
            {selectedImage && (
                <div className="lightbox-modal" onClick={closeLightbox}>
                    <button className="close-lightbox" onClick={closeLightbox}>
                        <X size={32} />
                    </button>
                    
                    <button className="nav-lightbox prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                        <ChevronLeft size={40} />
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={selectedImage} 
                            alt={`Imagen ${currentIndex + 1}`}
                            className="lightbox-image"
                        />
                        <div className="lightbox-counter">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>

                    <button className="nav-lightbox next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                        <ChevronRight size={40} />
                    </button>
                </div>
            )}
        </section>
    );
};

