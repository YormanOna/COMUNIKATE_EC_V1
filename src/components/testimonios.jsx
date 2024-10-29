import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import '../styles/testimonios.css';

export function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const videoRefs = useRef({});

  const testimonials = [
    {
      id: 1,
      name: "NIETO",
      role: "Estudiante de Oratoria y Locución",
      videoUrl: "https://youtube.com/shorts/bQarnlZwNvI",
    },
    {
      id: 2,
      name: "JHOMAIRA",
      role: "Estudiante de Producción Audiovisual",
      videoUrl: "https://youtube.com/shorts/0sHXdNwM51Q",
    },
    {
      id: 3,
      name: "AYLIN",
      role: "Estudiante de Oratoria y Locución",
      videoUrl: "https://youtube.com/shorts/TtB9snynuzc",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Pausar todos los videos cuando la sección no está visible
            Object.values(videoRefs.current).forEach((videoRef) => {
              if (videoRef && videoRef.internalPlayer) {
                videoRef.internalPlayer.pauseVideo();
              }
            });
          }
        });
      },
      {
        threshold: 0.2, // Trigger cuando al menos 20% de la sección es visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    // Pausar el video actual antes de cambiar
    const currentVideo = videoRefs.current[testimonials[activeIndex].id];
    if (currentVideo && currentVideo.internalPlayer) {
      currentVideo.internalPlayer.pauseVideo();
    }
    
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    // Pausar el video actual antes de cambiar
    const currentVideo = videoRefs.current[testimonials[activeIndex].id];
    if (currentVideo && currentVideo.internalPlayer) {
      currentVideo.internalPlayer.pauseVideo();
    }
    
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <div className="section-testimonials" ref={sectionRef}>
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
                <YouTubeVideo
                  videoUrl={testimonial.videoUrl}
                  isActive={index === activeIndex}
                  ref={(el) => (videoRefs.current[testimonial.id] = el)}
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

const YouTubeVideo = React.forwardRef(({ videoUrl, isActive }, ref) => {
  const getVideoId = (url) => {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtube.com' || urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.split('/').pop();
    }
    return null;
  };

  const videoId = getVideoId(videoUrl);
  if (!videoId) {
    return <div>Error: Invalid YouTube URL</div>;
  }

  const opts = {
    height: '480',
    width: '270',
    playerVars: {
      autoplay: 0,
      mute: 0,
      modestbranding: 1,
      showinfo: 0,
      controls: 0,
      rel: 0,
      loop: 1, // Habilita el loop del video
      playlist: videoId, // Necesario para que el loop funcione
      endmode: 0, // Desactiva la pantalla de finalización
      version: 3,
      playsinline: 1,
      enablejsapi: 1,
    },
  };

  const onEnd = (event) => {
    // Cuando el video termine, reiniciarlo
    event.target.seekTo(0);
    event.target.playVideo();
  };

  return (
    <div className="video-container">
      <YouTube 
        videoId={videoId} 
        opts={opts} 
        className="video-testimonials"
        ref={ref}
        onEnd={onEnd}
      />
    </div>
  );
});

export default TestimonialsSlider;