import { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './hook/ScrollToTop';

// Las páginas secundarias se descargan únicamente cuando el usuario las visita.
const Home = lazy(() => import('./pages/Home').then(({ Home }) => ({ default: Home })));
const Inscribite = lazy(() => import('./pages/Inscribite').then(({ Inscribite }) => ({ default: Inscribite })));
const Nosotros = lazy(() => import('./pages/Nosotros').then(({ Nosotros }) => ({ default: Nosotros })));
const Cursos = lazy(() => import('./pages/Cursos').then(({ Cursos }) => ({ default: Cursos })));
const Servicios = lazy(() => import('./pages/Servicios').then(({ Servicios }) => ({ default: Servicios })));
const PageContac = lazy(() => import('./pages/PageContac').then(({ PageContac }) => ({ default: PageContac })));
const OratoriaLocucion = lazy(() => import('./pages/Cursos/Periodismo/OratoriaLocución').then(({ OratoriaLocucion }) => ({ default: OratoriaLocucion })));
const PeriodismoDeportivo = lazy(() => import('./pages/Cursos/Periodismo/PeriodismoDeportivo').then(({ PeriodismoDeportivo }) => ({ default: PeriodismoDeportivo })));
const LocucionRadial = lazy(() => import('./pages/Cursos/Periodismo/LocucionRadial').then(({ LocucionRadial }) => ({ default: LocucionRadial })));
const MediaTraining = lazy(() => import('./pages/Cursos/Periodismo/MediaTraining').then(({ MediaTraining }) => ({ default: MediaTraining })));
const PresentadorTvMediosDigitales = lazy(() => import('./pages/Cursos/Periodismo/PresentadorMediosDigitales').then(({ PresentadorTvMediosDigitales }) => ({ default: PresentadorTvMediosDigitales })));
const MarketingDigital = lazy(() => import('./pages/Cursos/SocialMedia/MarketingDigital').then(({ MarketingDigital }) => ({ default: MarketingDigital })));
const ProduccionAudiovisual = lazy(() => import('./pages/Cursos/Audiovisual/ProduccionAudiovisual').then(({ ProduccionAudiovisual }) => ({ default: ProduccionAudiovisual })));
const Fotografia = lazy(() => import('./pages/Cursos/Audiovisual/Fotografia').then(({ Fotografia }) => ({ default: Fotografia })));
const CreacionDePodcast = lazy(() => import('./pages/Cursos/Audiovisual/CreacionPodcast').then(({ CreacionDePodcast }) => ({ default: CreacionDePodcast })));
const LiveStreaming = lazy(() => import('./pages/Cursos/Audiovisual/LiveStreaming').then(({ LiveStreaming }) => ({ default: LiveStreaming })));

function App() {
  return (
    <BrowserRouter>
    <WhatsAppButton />
    <ScrollToTop />
      <Suspense fallback={<div className="route-loading" role="status" aria-live="polite"><span className="route-loading__spinner" aria-hidden="true" /><span className="route-loading__title">Cargando contenido</span><span className="route-loading__text">Un momento, por favor…</span></div>}>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/inscripciones" element={<Inscribite />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contacto" element={<PageContac />} />
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
      </Suspense>
    </BrowserRouter>
  )
}

export default App
