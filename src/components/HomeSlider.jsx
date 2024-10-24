import { useState, useEffect } from 'react';
import '../styles/homeSlider.css';
import INICIO_1 from '../img/HomeSlider/INICIO_1.png';
import INICIO_2 from '../img/HomeSlider/INICIO_2.png';
import INICIO_3 from '../img/HomeSlider/INICIO_3.png';
import INICIO_4 from '../img/HomeSlider/INICIO_4.png';
import useTypewriter from '../hook/useTypewriter';

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: INICIO_1, title: 'BIENVENIDO A COMUNIKATE ECUADOR' },
    { image: INICIO_2, title: 'APRENDE FOTOGRAFÍA PROFESIONAL' },
    { image: INICIO_3, title: 'CURSOS ESPECIALIZADOS' },
    { image: INICIO_4, title: 'ÚNETE A NUESTRA COMUNIDAD' },
  ];

  const typedTitle = useTypewriter(slides[currentSlide].title, 100);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="slider-container-slider">
      <div className="clip-container">
        <div className="content-container">
          {slides.map((slide, index) => (
            <div key={index} className={`slide-slider ${index === currentSlide ? 'active-slider' : ''}`}>
              <img src={slide.image} alt={slide.title} className="slide-image-slider" />
              <div className="content-wrapper-slider">
                <h2 className="slide-title-slider">{index === currentSlide ? typedTitle : ''}</h2>
              </div>
            </div>
          ))}
          <div className="dots-container-slider">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot-slider ${index === currentSlide ? 'active-dot-slider' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
