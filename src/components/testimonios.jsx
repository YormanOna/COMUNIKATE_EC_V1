import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import '../styles/testimonios.css';

export function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

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

  // Pausar el único reproductor montado cuando el slider sale de viewport.
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && videoRef.current?.internalPlayer) {
          videoRef.current.internalPlayer.pauseVideo().catch(() => {});
        }
      });
    }, { root: null, threshold: 0.2 });

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const changeSlide = (dir) => {
    setActiveIndex(i =>
      dir === 'next'
        ? (i + 1) % testimonials.length
        : (i - 1 + testimonials.length) % testimonials.length
    );
  };

  const goTo = (i) => {
    setIsVideoLoaded(false);
    setActiveIndex(i);
  };
  const changeSlideAndReset = (dir) => {
    setIsVideoLoaded(false);
    changeSlide(dir);
  };
  const handleTouchStart = (event) => { event.currentTarget.dataset.touchStart = event.touches[0].clientX; };
  const handleTouchEnd = (event) => {
    const distance = event.changedTouches[0].clientX - Number(event.currentTarget.dataset.touchStart);
    if (Math.abs(distance) > 50) changeSlideAndReset(distance < 0 ? 'next' : 'prev');
  };

  return (
    <div className="section-testimonials" ref={sectionRef}>
      <div className="header-testimonials">
        <h2 className="title-testimonials">TESTIMONIOS</h2>
      </div>

      <div className="container-testimonials">
        <button
          className="button-nav-testimonials prev-testimonials"
          onClick={() => changeSlideAndReset('prev')}
          aria-label="Testimonio anterior"
        >
          <ChevronLeft size={28} strokeWidth={2.5} aria-hidden="true" />
        </button>

        <div className="slider-testimonials" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
                  {idx === activeIndex && (isVideoLoaded ? <YouTubeVideo videoUrl={t.videoUrl} ref={videoRef} /> : <VideoPlaceholder videoUrl={t.videoUrl} onPlay={() => setIsVideoLoaded(true)} />)}
              </div>
              <div className="info-testimonials">
                <h3 className="name-testimonials">{t.name}</h3>
                <p className="role-testimonials">{t.role}</p>
                <p className="counter-testimonials">{idx + 1} de {testimonials.length}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="button-nav-testimonials next-testimonials"
          onClick={() => changeSlideAndReset('next')}
          aria-label="Siguiente testimonio"
        >
          <ChevronRight size={28} strokeWidth={2.5} aria-hidden="true" />
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

const YouTubeVideo = React.forwardRef(({ videoUrl }, ref) => {
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
      enablejsapi: 1,
      playsinline: 1
    }
  };

  return (
    <YouTube
      videoId={id}
      opts={opts}
      className="video-testimonials"
      ref={ref}
      onStateChange={e => {
        if (e.data === YouTube.PlayerState.ENDED) {
          e.target.seekTo(0);
        }
      }}
    />
  );
});

function VideoPlaceholder({ videoUrl, onPlay }) {
  const id = videoUrl.split('/').pop();
  return <button className="video-placeholder-testimonials" type="button" onClick={onPlay} aria-label="Reproducir testimonio">
    <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
    <span className="play-button-testimonials" aria-hidden="true"><Play size={25} fill="currentColor" strokeWidth={0} /></span>
  </button>;
}

YouTubeVideo.displayName = 'YouTubeVideo';
YouTubeVideo.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  onReady: PropTypes.func,
};
VideoPlaceholder.propTypes = { videoUrl: PropTypes.string.isRequired, onPlay: PropTypes.func.isRequired };

export default TestimonialsSlider;
