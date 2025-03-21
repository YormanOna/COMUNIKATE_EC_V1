import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import '../styles/testimonios.css';

export function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playersReady, setPlayersReady] = useState({});
  const sectionRef = useRef(null);
  const videoRefs = useRef({});

  const testimonials = [
    {
      id: 1,
      name: "NIETO",
      role: "Estudiante de Oratoria y Locución",
      videoUrl: "https://youtube.com/shorts/kMkQf8ILhFI"
    },
    {
      id: 2,
      name: "JHOMAIRA",
      role: "Estudiante de Producción Audiovisual",
      videoUrl: "https://youtube.com/shorts/0sHXdNwM51Q"
    },
    {
      id: 3,
      name: "AYLIN",
      role: "Estudiante de Oratoria y Locución",
      videoUrl: "https://youtube.com/shorts/KBa8tT8GeJE"
    },
    {
      id: 4,
      name: "JESSICA",
      role:"Estudiante de Oratoria y Locución",
      videoUrl: "https://youtube.com/shorts/vweyNazUdGA"
    },
    {
      id: 5,
      name: "Alumno Sta.Domingo",
      role:"Estudiante de Oratoria y Locución",
      videoUrl: "https://youtube.com/shorts/79jV_hVdt48"
    },
    {
      id: 6,
      name: "Alexandra",
      role:"Estudiante de Oratoria y Locución",
      videoUrl: "https://youtube.com/shorts/Z6xXq7ihuC8"
    },
    {
      id: 7,
      name: "MAOLI",
      role:"Estudiante de Oratoria y Locución",
      videoUrl: "https://youtube.com/shorts/jMMRFPzNEME"
    },
    {
      id: 8,
      name: "Alumna Sta.Domingo",
      role:"Estudiante de Oratoria y Locución",
      videoUrl: "https://youtube.com/shorts/KWRkImeEr-Y"
    },
    {
      id: 9,
      name: "Alumna Sta.Domingo",
      role:"Estudiante de Oratoria y Locución",
      videoUrl: "https://youtube.com/shorts/w1xlXY5DnaM"
    }
  ];

  // Manejar la intersección de manera más eficiente
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          Object.entries(videoRefs.current).forEach(([id, videoRef]) => {
            if (videoRef?.internalPlayer && playersReady[id]) {
              try {
                videoRef.internalPlayer.pauseVideo();
              } catch (error) {
                console.warn('Error al pausar video:', error);
              }
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [playersReady]);

  const handleSlideChange = async (direction) => {
    const currentVideo = videoRefs.current[testimonials[activeIndex].id];
    if (currentVideo?.internalPlayer && playersReady[testimonials[activeIndex].id]) {
      try {
        await currentVideo.internalPlayer.pauseVideo();
      } catch (error) {
        console.warn('Error al pausar video durante cambio de slide:', error);
      }
    }

    setActiveIndex((current) => {
      if (direction === 'next') {
        return current === testimonials.length - 1 ? 0 : current + 1;
      }
      return current === 0 ? testimonials.length - 1 : current - 1;
    });
  };

  const handleDotClick = async (index) => {
    const currentVideo = videoRefs.current[testimonials[activeIndex].id];
    if (currentVideo?.internalPlayer && playersReady[testimonials[activeIndex].id]) {
      try {
        await currentVideo.internalPlayer.pauseVideo();
      } catch (error) {
        console.warn('Error al pausar video al hacer clic en dot:', error);
      }
    }
    setActiveIndex(index);
  };

  return (
    <div className="section-testimonials" ref={sectionRef}>
      <div className="header-testimonials">
        <h2 className="title-testimonials">TESTIMONIOS</h2>
      </div>

      <div className="container-testimonials">
        <button 
          className="button-nav-testimonials prev-testimonials" 
          onClick={() => handleSlideChange('prev')}
          type="button"
          aria-label="Previous testimonial"
        >
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
                  onReady={() => setPlayersReady(prev => ({...prev, [testimonial.id]: true}))}
                />
              </div>
              <div className="info-testimonials">
                <h3 className="name-testimonials">{testimonial.name}</h3>
                <p className="role-testimonials">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="button-nav-testimonials next-testimonials" 
          onClick={() => handleSlideChange('next')}
          type="button"
          aria-label="Next testimonial"
        >
          &#8250;
        </button>
      </div>

      <div className="container-dots-testimonials">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to testimonial ${index + 1}`}
            className={`dot-testimonials ${index === activeIndex ? 'active-dot-testimonials' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

const YouTubeVideo = React.forwardRef(({ videoUrl, isActive, onReady }, ref) => {
  const getVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'youtube.com' || urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.split('/').pop();
      }
      return null;
    } catch (error) {
      console.error('Error al parsear URL del video:', error);
      return null;
    }
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
      loop: 1,
      playlist: videoId,
      origin: window.location.origin,
      enablejsapi: 1,
      widget_referrer: window.location.href,
      playsinline: 1
    },
  };

  const handleReady = (event) => {
    if (onReady) {
      onReady(event);
    }
  };

  const handleStateChange = (event) => {
    // Manejar cambios de estado del video
    if (event.data === YouTube.PlayerState.ENDED) {
      try {
        event.target.seekTo(0);
      } catch (error) {
        console.warn('Error al reiniciar video:', error);
      }
    }
  };

  return (
    <div className="video-container">
      <YouTube 
        videoId={videoId} 
        opts={opts} 
        className="video-testimonials"
        ref={ref}
        onReady={handleReady}
        onStateChange={handleStateChange}
        onError={(error) => console.warn('Error en el player de YouTube:', error)}
      />
    </div>
  );
});

export default TestimonialsSlider;