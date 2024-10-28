import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Inscribite} from './pages/Inscribite';
import {Nosotros} from './pages/Nosotros';
import {Cursos} from './pages/Cursos';
import{Servicios} from './pages/Servicios';
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
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
