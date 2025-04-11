import React, { useState } from "react";
import "../styles/PageContac.css"; 
import { NavigationMenu } from "../components/NavBar";
import { Footer } from "../components/footer"; 
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export function PageContac() {
  // Dirección de correo del receptor (puedes cambiarla o hacerla dinámica)
  const receiver = "luisorlo1997@gmail.com";

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    mensaje: ""
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // Actualiza los datos del formulario
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Simula el envío del formulario a un "receptor"
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Simulación de envío asíncrono
    setTimeout(() => {
      setLoading(false);
      setStatus({ message: "¡Mensaje enviado exitosamente!", success: true });
      console.log("Datos enviados a:", receiver);
      console.log("Contenido del mensaje:", formData);
      // Reinicia el formulario
      setFormData({ nombre: "", email: "", celular: "", mensaje: "" });
    }, 2000);
  };

  return (
    <div>
      <NavigationMenu />
      <br /><br /><br /><br /><br />
      <div className="pageContac">
        {/* Sección izquierda (fondo naranja) */}
        <div className="pageContac-left">
          <h1 className="pageContac-title">CONTACTOS</h1>
          <div className="pageContac-info">
            <p>
              Matiz Quito: Av. Luis Saá y Sadria, Edificio Daniel Cadena - 9no piso - Oficina 901
            </p>
            <p>(Sector parque La Alameda)</p>
            <br />
            <p>{receiver}</p>
            <p>+593 (99) 522 2922</p>
          </div>
          <div className="pageContac-social">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTiktok className="social-icon" />
          </div>
          <p className="pageContac-handle">@comunikateec</p>
        </div>

        {/* Sección derecha (fondo gris, formulario) */}
        <div className="pageContac-right">
          <br /><br />
          <form className="pageContac-form" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              id="nombre"
              type="text"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">E-Mail:</label>
            <input
              id="email"
              type="email"
              placeholder="Tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="celular">Celular:</label>
            <input
              id="celular"
              type="text"
              placeholder="Tu número de celular"
              value={formData.celular}
              onChange={handleChange}
            />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.mensaje}
              onChange={handleChange}
              required
            />

            <button type="submit" className="pageContac-submitButton" disabled={loading}>
              {loading ? "Enviando..." : "ENVIAR"}
            </button>
          </form>
          {status && (
            <p className={`form-status ${status.success ? "success" : "error"}`}>
              {status.message}
            </p>
          )}
        </div>
      </div>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7904015935846!2d-78.50055259999999!3d-0.21434299999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59bd595f6a6a5%3A0xcf57d1528fd56e10!2sComunikate%20Ecuador!5e0!3m2!1ses-419!2sec!4v1744388054764!5m2!1ses-419!2sec" 
        width="600" 
        height="450" 
        className="pageContac-map"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </div>
  );
}
