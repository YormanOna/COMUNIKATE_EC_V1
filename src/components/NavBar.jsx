// NavigationMenu.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/menuBar.css';
import Logo from '../img/LOGO_NEGRO.png';

export function NavigationMenu() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`nav-container-menu ${isScrolled ? 'scrolled-menu' : ''}`}>
            <ul className="nav-left-menu">
            <li className="nav-item-menu">
                    <Link to="/" className="nav-link-menu">Inicio</Link>
                </li>
                <li className="nav-item-menu has-submenu">
                    <Link to="/nosotros" className="nav-link-menu">
                        Nosotros
                    </Link>
                    <ul className="submenu">
                        <li><Link to="/nosotros#instructores" className="submenu-link">Instructores</Link></li>
                        <li><Link to="/nosotros#certificados" className="submenu-link">Certificados</Link></li>
                        <li><Link to="/nosotros#galeria" className="submenu-link">Galería</Link></li>
                    </ul>
                </li>
                <li className="nav-item-menu has-submenu">
                    <Link to="/cursos" className="nav-link-menu">Cursos</Link>
                    <ul className="submenu">
                        <li><Link to="/nosotros#instructores" className="submenu-link">Periodismo</Link></li>
                        <li><Link to="/nosotros#certificados" className="submenu-link">Audiovisual</Link></li>
                        <li><Link to="/nosotros#galeria" className="submenu-link">SocialMedia</Link></li>
                        <li><Link to="/nosotros#galeria" className="submenu-link">Otros</Link></li>
                    </ul>
                </li>
            </ul>

            <div className="logo-wrapper-menu">
                <img 
                    src={Logo} 
                    alt="Logo" 
                    className="logo-image-menu"
                />
            </div>

            <ul className="nav-right-menu">
                <li className="nav-item-menu">
                    <Link to="/servicios" className="nav-link-menu">Servicios</Link>
                </li>
                <li className="nav-item-menu">
                    <a href="#contacto" className="nav-link-menu">Contáctanos</a>
                </li>
                <li className="nav-item-menu">
                    <Link to="/inscripciones" className="nav-link-menu">Inscríbete Aquí</Link>
                </li>
            </ul>
        </nav>
    );
}