import '../../styles/homeSlider.css';
import INICIO_1 from '../../img/HomeSlider/INICIO_1.webp';
import useTypewriter from '../../hook/useTypewriter';

export function QuienesSomos() {
  const title = 'Comuníkate ofrece cursos en Comunicación Social para fortalecer las competencias laborales de profesionales en medios ecuatorianos.';
  const typedTitle = useTypewriter(title, 100);

  return (
    <section className="static-container-qS" aria-labelledby="quienes-somos-title">
      <h1 className="static-title-qS">¿Quiénes somos?</h1>
      <div className="static-image-container-qS">
        <img src={INICIO_1} alt="Comuníkate Ecuador" className="static-image-qS" loading="eager" decoding="async" />
        <div className="content-wrapper-qS">
          <p className="slide-title-qS" id="quienes-somos-title">{typedTitle}</p>
        </div>
      </div>
    </section>
  );
}
