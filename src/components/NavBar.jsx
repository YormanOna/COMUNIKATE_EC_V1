import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/menuBar.css";
import Logo from "../img/LOGO_NEGRO.png";

export function NavigationMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`nav-container-menu ${isScrolled ? "scrolled-menu" : "initial-menu"}`}>
      {/* Ícono del menú móvil: cambia entre hamburguesa y cruz */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <span className="icon-close">&#10005;</span>
        ) : (
          <span className="icon-hamburger">&#9776;</span>
        )}
      </div>

      {/* Menú de escritorio */}
      <ul className="nav-left-menu desktop-menu">
        <li className="nav-item-menu">
          <Link to="/" className="nav-link-menu">
            Inicio
          </Link>
        </li>
        <li className="nav-item-menu has-submenu">
          <Link to="/nosotros" className="nav-link-menu">
            Nosotros
          </Link>
          <ul className="submenu">
            <li>
              <Link to="/nosotros#instructores" className="submenu-link">
                Instructores
              </Link>
            </li>
            <li>
              <Link to="/nosotros#certificados" className="submenu-link">
                Certificados
              </Link>
            </li>
            <li>
              <Link to="/nosotros#galeria" className="submenu-link">
                Galería
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item-menu has-submenu">
          <Link to="/cursos" className="nav-link-menu">
            Cursos
          </Link>
          <ul className="submenu">
            <li>
              <Link to="/cursos#periodismo" className="submenu-link">
                Periodismo
              </Link>
            </li>
            <li>
              <Link to="/cursos#audiovisual" className="submenu-link">
                Audiovisual
              </Link>
            </li>
            <li>
              <Link to="/cursos#socialMedia" className="submenu-link">
                SocialMedia
              </Link>
            </li>
            <li>
              <Link to="/cursos#otros" className="submenu-link">
                Otros
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <div className="logo-wrapper-menu">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo-image-menu" />
        </Link>
      </div>

      <ul className="nav-right-menu desktop-menu">
        <li className="nav-item-menu">
          <Link to="/servicios" className="nav-link-menu">
            Servicios
          </Link>
        </li>
        <li className="nav-item-menu">
          <Link to="/contacto" className="nav-link-menu">
            Contáctanos
          </Link>
        </li>
        <li className="nav-item-menu">
          <Link to="/inscripciones" className="nav-link-menu">
            Inscríbete Aquí
          </Link>
        </li>
      </ul>

      {/* Menú móvil (sidebar) */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-menu-list">
          <li className="mobile-menu-item" onClick={closeMobileMenu}>
            <Link to="/">Inicio</Link>
          </li>
          <li className="mobile-menu-item">
            <span>Nosotros</span>
            <ul className="mobile-submenu">
              <li onClick={closeMobileMenu}>
                <Link to="/nosotros#instructores">Instructores</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/nosotros#certificados">Certificados</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/nosotros#galeria">Galería</Link>
              </li>
            </ul>
          </li>
          <li className="mobile-menu-item">
            <span>Cursos</span>
            <ul className="mobile-submenu">
              <li onClick={closeMobileMenu}>
                <Link to="/cursos#periodismo">Periodismo</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/cursos#audiovisual">Audiovisual</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/cursos#socialMedia">SocialMedia</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/cursos#otros">Otros</Link>
              </li>
            </ul>
          </li>
          <li className="mobile-menu-item" onClick={closeMobileMenu}>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li className="mobile-menu-item" onClick={closeMobileMenu}>
            <Link to="/contacto">Contáctanos</Link>
          </li>
          <li className="mobile-menu-item" onClick={closeMobileMenu}>
            <Link to="/inscripciones">Inscríbete Aquí</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
