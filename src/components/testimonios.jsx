// TestimonialsSlider.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/testimonios.css';
import VIDEO2 from '../videos/testimonio_ailine_final.mp4';
import VIDEO3 from '../videos/testimonio_Eriza_Final.mp4';

export function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  const testimonials = [
    {
      id: 1,
      name: "NIETO",
      role: "Estudiante de Oratoria y Locución",
      videoUrl: VIDEO2,
    },
    {
      id: 2,
      name: "JHOMAIRA",
      role: "Estudiante de Producción Audiovisual",
      videoUrl: VIDEO2,
    },
    {
      id: 3,
      name: "AYLIN",
      role: "Estudiante de Oratoria y Locución",
      videoUrl: VIDEO3,
    },
  ];

  // Avanzar automáticamente el slider cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 100000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <div className="section-testimonials">
      <div className="header-testimonials">
        <h2 className="title-testimonials">TESTIMONIOS</h2>
      </div>

      <div className="container-testimonials">
        <button className="button-nav-testimonials prev-testimonials" onClick={prevSlide}>
          &#8249;
        </button>

        <div className="slider-testimonials">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card-testimonials ${
                index === activeIndex ? 'active-testimonials' : ''
              } ${
                index === (activeIndex - 1 + testimonials.length) % testimonials.length
                  ? 'prev-slide-testimonials'
                  : ''
              } ${
                index === (activeIndex + 1) % testimonials.length
                  ? 'next-slide-testimonials'
                  : ''
              }`}
            >
              <div className="wrapper-video-testimonials">
                <VideoComponent
                  videoUrl={testimonial.videoUrl}
                  isActive={index === activeIndex}
                  ref={(el) => (videoRefs.current[index] = el)}
                />
              </div>
              <div className="info-testimonials">
                <h3 className="name-testimonials">{testimonial.name}</h3>
                <p className="role-testimonials">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="button-nav-testimonials next-testimonials" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className="container-dots-testimonials">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot-testimonials ${index === activeIndex ? 'active-dot-testimonials' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

const VideoComponent = React.forwardRef(({ videoUrl, isActive, onVideoEnd }, ref) => {
    const { ref: inViewRef, inView } = useInView({
      threshold: 0.5,
      triggerOnce: false,
    });
  
    const [isPlaying, setIsPlaying] = useState(false);
  
    useEffect(() => {
      if (ref.current) {
        if (isActive && inView && isPlaying) {
          ref.current.play().catch(error => {
            console.error('Error reproduciendo el video:', error);
          });
        } else {
          ref.current.pause();
          ref.current.currentTime = 0; // Reiniciar video si está fuera de vista
        }
      }
    }, [inView, isActive, ref, isPlaying]);
  
    const handlePlay = () => {
      setIsPlaying(true);
      if (ref.current) {
        ref.current.muted = false; // Desactivar mute al iniciar reproducción
        ref.current.play().catch(error => {
          console.error('Error reproduciendo el video:', error);
        });
      }
    };
  
    const handlePause = () => {
      setIsPlaying(false);
      if (ref.current) {
        ref.current.pause(); // Pausar el video
      }
    };
  
    const handleVideoEnd = () => {
      setIsPlaying(false);
      onVideoEnd(); // Llama a la función para indicar que el video ha terminado
    };
  
    return (
      <div className="video-wrapper">
        <video
          ref={(node) => {
            ref.current = node;
            inViewRef(node); // Conectar ambos refs
          }}
          className="video-testimonials"
          muted={isPlaying ? false : true} // Muted solo si no se está reproduciendo
          onEnded={handleVideoEnd} // Llama a handleVideoEnd cuando el video termina
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {!isPlaying && (
          <button className="play-button" onClick={handlePlay}>
            {/* SVG del icono de reproducción */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="60"
              height="60"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}
      </div>
    );
  });

export default TestimonialsSlider;
