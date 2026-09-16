import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu } from '../components/NavBar';
import { Footer } from '../components/footer';
import '../styles/NotFound.css';

export function NotFound() {
  useEffect(() => {
    document.title = "404 - Página no encontrada | Comunikate Academy";
  }, []);

  return (
    <div className="not-found-page">
      <NavigationMenu />
      <main className="not-found-content">
        <span className="not-found-badge">Error 404</span>
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Página no encontrada</h2>
        <p className="not-found-desc">
          Lo sentimos, la página que buscas no existe, ha sido movida o la dirección fue escrita incorrectamente.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-btn-primary">
            Ir al Inicio
          </Link>
          <Link to="/cursos" className="not-found-btn-secondary">
            Explorar Cursos
          </Link>
          <Link to="/contacto" className="not-found-btn-secondary">
            Contáctanos
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
