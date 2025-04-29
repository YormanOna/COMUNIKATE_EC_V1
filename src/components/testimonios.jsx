import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import '../styles/testimonios.css';

export function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playersReady, setPlayersReady] = useState({});
  const sectionRef = useRef(null);
  const videoRefs = useRef({});

  const testimonials = [
    { id: 1, name: "NIETO", role: "Estudiante de Oratoria y Locución", videoUrl: "https://youtube.com/shorts/kMkQf8ILhFI" },
    { id: 2, name: "JHOMAIRA", role: "Estudiante de Producción Audiovisual", videoUrl: "https://youtube.com/shorts/0sHXdNwM51Q" },
    { id: 3, name: "AYLIN", role: "Estudiante de Oratoria y Locución", videoUrl: "https://youtube.com/shorts/KBa8tT8GeJE" },
    { id: 4, name: "JESSICA", role:"Estudiante de Oratoria y Locución", videoUrl: "https://youtube.com/shorts/vweyNazUdGA" },
    { id: 5, name: "Alumno Sta.Domingo", role:"Estudiante de Oratoria y Locución", videoUrl: "https://youtube.com/shorts/79jV_hVdt48" },
    { id: 6, name: "Alexandra", role:"Estudiante de Oratoria y Locución", videoUrl: "https://youtube.com/shorts/Z6xXq7ihuC8" },
    { id: 7, name: "MAOLI", role:"Estudiante de Oratoria y Locución", videoUrl: "https://youtube.com/shorts/jMMRFPzNEME" },
    { id: 8, name: "Alumna Sta.Domingo", role:"Estudiante de Oratoria y Locución", videoUrl: "https://youtube.com/shorts/KWRkImeEr-Y" },
    { id: 9, name: "Alumna Sta.Domingo", role:"Estudiante de Oratoria y Locución", videoUrl: "https://youtube.com/shorts/w1xlXY5DnaM" },
  ];

  // Pausar todos los vídeos cuando el slider sale de viewport
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          Object.entries(videoRefs.current).forEach(([id, player]) => {
            if (player?.internalPlayer && playersReady[id]) {
              player.internalPlayer.pauseVideo().catch(() => {});
            }
          });
        }
      });
    }, { root: null, threshold: 0.2 });

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [playersReady]);

  const changeSlide = (dir) => {
    const currId = testimonials[activeIndex].id;
    const currPlayer = videoRefs.current[currId];
    if (currPlayer?.internalPlayer && playersReady[currId]) {
      currPlayer.internalPlayer.pauseVideo().catch(() => {});
    }
    setActiveIndex(i =>
      dir === 'next'
        ? (i + 1) % testimonials.length
        : (i - 1 + testimonials.length) % testimonials.length
    );
  };

  const goTo = (i) => {
    const currId = testimonials[activeIndex].id;
    const currPlayer = videoRefs.current[currId];
    if (currPlayer?.internalPlayer && playersReady[currId]) {
      currPlayer.internalPlayer.pauseVideo().catch(() => {});
    }
    setActiveIndex(i);
  };

  return (
    <div className="section-testimonials" ref={sectionRef}>
      <div className="header-testimonials">
        <h2 className="title-testimonials">TESTIMONIOS</h2>
      </div>

      <div className="container-testimonials">
        <button
          className="button-nav-testimonials prev-testimonials"
          onClick={() => changeSlide('prev')}
          aria-label="Previous testimonial"
        >
          &#8249;
        </button>

        <div className="slider-testimonials">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={
                `card-testimonials ` +
                (idx === activeIndex ? 'active-testimonials ' : '') +
                (idx === (activeIndex - 1 + testimonials.length) % testimonials.length
                  ? 'prev-slide-testimonials '
                  : '') +
                (idx === (activeIndex + 1) % testimonials.length
                  ? 'next-slide-testimonials'
                  : '')
              }
            >
              <div className="wrapper-video-testimonials">
                <YouTubeVideo
                  videoUrl={t.videoUrl}
                  ref={el => (videoRefs.current[t.id] = el)}
                  onReady={() => setPlayersReady(p => ({ ...p, [t.id]: true }))}
                />
              </div>
              <div className="info-testimonials">
                <h3 className="name-testimonials">{t.name}</h3>
                <p className="role-testimonials">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="button-nav-testimonials next-testimonials"
          onClick={() => changeSlide('next')}
          aria-label="Next testimonial"
        >
          &#8250;
        </button>
      </div>

      <div className="container-dots-testimonials">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`dot-testimonials ${i === activeIndex ? 'active-dot-testimonials' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const YouTubeVideo = React.forwardRef(({ videoUrl, onReady }, ref) => {
  const extractId = url => {
    try { return new URL(url).pathname.split('/').pop(); }
    catch { return null; }
  };
  const id = extractId(videoUrl);
  if (!id) return <div>Error: URL inválida</div>;

  const opts = {
    height: '480',
    width: '270',
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      loop: 1,
      playlist: id,
      origin: window.location.origin,
      enablejsapi: 1,
      widget_referrer: window.location.href,
      playsinline: 1
    }
  };

  const handleReady = e => onReady && onReady(e);

  return (
    <YouTube
      videoId={id}
      opts={opts}
      className="video-testimonials"
      ref={ref}
      onReady={handleReady}
      onStateChange={e => {
        if (e.data === YouTube.PlayerState.ENDED) {
          e.target.seekTo(0);
        }
      }}
    />
  );
});

export default TestimonialsSlider;
