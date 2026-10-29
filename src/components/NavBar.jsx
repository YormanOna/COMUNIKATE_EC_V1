import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/menuBar.css";
import Logo from "../img/LOGO_NEGRO.png";
import LogoWhite from "../img/LOGO-BLANCO.png";

export function NavigationMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isCourseDetail = pathname.startsWith("/cursos/");
  const transparentPage = ["/", "/nosotros", "/cursos"].includes(pathname);
  const navPageClass = isCourseDetail ? "detail-menu" : transparentPage ? (pathname === "/cursos" ? "courses-menu" : "light-menu") : "";
  const currentLogo = !isScrolled && (transparentPage || isCourseDetail) ? LogoWhite : Logo;

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
    <nav className={`nav-container-menu ${isScrolled ? "scrolled-menu" : "initial-menu"} ${navPageClass}`}>
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
                Comunicación
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
          <img src={currentLogo} alt="Comunikate Academy" className="logo-image-menu" />
        </Link>
      </div>

      <ul className="nav-right-menu desktop-menu">
        <li className="nav-item-menu has-submenu">
          <span className="nav-link-menu nav-dropdown-trigger" role="button" tabIndex={0}>
            Nuestros Medios
            <svg className="submenu-arrow-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <ul className="submenu">
            <li>
              <a href="https://eqradio593.com/eqproducciones" target="_blank" rel="noopener noreferrer" className="submenu-link">
                EQ Producciones
              </a>
            </li>
            <li>
              <a href="https://eqradio593.com/eq593" target="_blank" rel="noopener noreferrer" className="submenu-link">
                EQ593 en vivo
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item-menu">
          <Link to="/contacto" className="nav-link-menu">
            Contáctanos
          </Link>
        </li>
        <li className="nav-item-menu">
          <Link to="/inscripciones" className="nav-link-menu nav-enrollment-cta">
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
                <Link to="/cursos#periodismo">Comunicación</Link>
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
          <li className="mobile-menu-item">
            <span>Nuestros Medios</span>
            <ul className="mobile-submenu">
              <li onClick={closeMobileMenu}>
                <a href="https://eqradio593.com/eqproducciones" target="_blank" rel="noopener noreferrer">EQ Producciones</a>
              </li>
              <li onClick={closeMobileMenu}>
                <a href="https://eqradio593.com/eq593" target="_blank" rel="noopener noreferrer">EQ593 en vivo</a>
              </li>
            </ul>
          </li>
          <li className="mobile-menu-item" onClick={closeMobileMenu}>
            <Link to="/contacto">Contáctanos</Link>
          </li>
          <li className="mobile-menu-item" onClick={closeMobileMenu}>
            <Link to="/inscripciones" className="mobile-enrollment-cta">Inscríbete Aquí</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
