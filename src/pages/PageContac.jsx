import React, { useState } from "react";
import "../styles/PageContac.css"; 
import { NavigationMenu } from "../components/NavBar";
import { Footer } from "../components/footer"; 
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import emailjs from "emailjs-com";
import swal from 'sweetalert';

export function PageContac() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    mensaje: ""
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceId = "service_z16wqxr";
    const templateId = "template_q7wp0zd";
    const publicKey = "M4F1fQNIYzBdmLfMW";

    const templateParams = {
      from_name: formData.nombre,
      from_email: formData.email,
      celular: formData.celular,
      message: formData.mensaje
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setFormData({ nombre: "", email: "", celular: "", mensaje: "" });
        swal({
          title: "¡Gracias por tu interés!",
          text: "Hemos recibido tus datos y te contactaremos a la brevedad.",
          icon: "success",
        })
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        swal({
          title: "¡Oops!",
          text: "Ha ocurrido un error al enviar tus datos. Por favor, inténtalo de nuevo.",
          icon: "error",
        })
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <NavigationMenu />
      <br /><br /><br /><br /><br />
      <div className="pageContac">
        <div className="pageContac-left">
          <h1 className="pageContac-title">CONTACTOS</h1>
          <div className="pageContac-info">
            <p>Matiz Quito: Av. Luis Saá y Sadria, Edificio Daniel Cadena - 9no piso - Oficina 901</p>
            <p>(Sector parque La Alameda)</p><br />
            <p>comunikate.ec@gmail.com</p>
            <p>+593 (99) 522 2922</p>
          </div>
          <div className="pageContac-social">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTiktok className="social-icon" />
          </div>
          <p className="pageContac-handle">@comunikateec</p>
        </div>

        <div className="pageContac-right">
          <br /><br />
          <form className="pageContac-form" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input id="nombre" type="text" value={formData.nombre} onChange={handleChange} required />
            
            <label htmlFor="email">E-Mail:</label>
            <input id="email" type="email" value={formData.email} onChange={handleChange} required />
            
            <label htmlFor="celular">Celular:</label>
            <input id="celular" type="text" value={formData.celular} onChange={handleChange} />
            
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" rows="5" value={formData.mensaje} onChange={handleChange} required />

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
