import '../../styles/homeSlider.css';
import INICIO_1 from '../../img/HomeSlider/INICIO_1.webp';
import useTypewriter from '../../hook/useTypewriter';

export function QuienesSomos() {
  const title = 'Comuníkate ofrece cursos en Comunicación Social para fortalecer las competencias laborales de profesionales en medios ecuatorianos.';
  const typedTitle = useTypewriter(title, 100);

  return (
    <div className="static-container-qS">
      <h1 className="static-title-qS">¿Quiénes somos?</h1>
      <div className="static-image-container-qS">
        <img src={INICIO_1} alt={title} className="static-image-qS" />
        <div className="content-wrapper-qS">
          <h2 className="slide-title-qS">{typedTitle}</h2>
        </div>
      </div>
    </div>
  );
}
