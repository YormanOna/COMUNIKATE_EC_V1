import React, { useEffect } from "react";
import Logo from "../img/LOGO-BLANCO.png";
import "../styles/menuBar.css";

export function NavBar() {
    useEffect(() => {
        const handleScroll = () => {
            const navMenu = document.querySelector('.navMenu');
            if (window.scrollY > 50) {
                navMenu.classList.add('scrolled');
            } else {
                navMenu.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="navMenu">
            <img src={Logo} className="logoMenu" alt="" />
            <div className="navegacionMenu">
                <ul className="selectMenu">
                    <li><a href="#" className="Select">Inicio</a></li>
                    <li><a href="#" className="Select">Contáctanos</a></li>
                    <li><a href="#" className="Select">Galería</a></li>
                </ul>
            </div>
        </div>
    );
}
