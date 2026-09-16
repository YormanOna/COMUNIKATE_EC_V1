// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Actualizar dinámicamente la etiqueta canonical según la ruta actual
        let canonicalTag = document.querySelector("link[rel='canonical']");
        if (!canonicalTag) {
            canonicalTag = document.createElement("link");
            canonicalTag.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalTag);
        }
        // Normalizar URL: quitar trailing slash salvo para la raíz
        const cleanPath = pathname === "/" ? "" : pathname.replace(/\/+$/, "");
        canonicalTag.setAttribute("href", `https://comunikate.academy${cleanPath || "/"}`);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
