import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Inscribite} from './pages/Inscribite';
import {Nosotros} from './pages/Nosotros';
import {Cursos} from './pages/Cursos';
import{Servicios} from './pages/Servicios';
import{OratoriaLocucion} from './pages/Cursos/Periodismo/OratoriaLocución';
import{PeriodismoDeportivo} from './pages/Cursos/Periodismo/PeriodismoDeportivo';
import{LocucionRadial} from './pages/Cursos/Periodismo/LocucionRadial';
import{MediaTraining} from './pages/Cursos/Periodismo/MediaTraining';
import{PresentadorTvMediosDigitales} from './pages/Cursos/Periodismo/PresentadorMediosDigitales';
import{MarketingDigital} from './pages/Cursos/SocialMedia/MarketingDigital';
import{ProduccionAudiovisual} from './pages/Cursos/Audiovisual/ProduccionAudiovisual'
import{Fotografia} from './pages/Cursos/Audiovisual/Fotografia';
import{CreacionDePodcast} from './pages/Cursos/Audiovisual/CreacionPodcast';
import{LiveStreaming} from './pages/Cursos/Audiovisual/LiveStreaming';
import ScrollToTop from './hook/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/inscripciones" element={<Inscribite />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursos/periodismo/oratoria-locucion" element={<OratoriaLocucion />} />
        <Route path="/cursos/periodismo/periodismo-deportivo" element={<PeriodismoDeportivo />} />
        <Route path="/cursos/periodismo/locucion-radial" element={<LocucionRadial />} />
        <Route path="/cursos/periodismo/media-training" element={<MediaTraining />} />
        <Route path="/cursos/periodismo/presentador-tv-medios-digitales" element={<PresentadorTvMediosDigitales />} />
        <Route path="/cursos/social-media/marketing-digital" element={<MarketingDigital />} />
        <Route path="/cursos/audiovisual/produccion-audiovisual" element={<ProduccionAudiovisual />} />
        <Route path="/cursos/audiovisual/fotografia" element={<Fotografia />} />
        <Route path="/cursos/audiovisual/creacion-de-podcast" element={<CreacionDePodcast />} />
        <Route path="/cursos/audiovisual/live-streaming" element={<LiveStreaming />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
