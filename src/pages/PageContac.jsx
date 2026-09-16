import React, { useState, useEffect } from "react";
import "../styles/PageContac.css"; 
import { NavigationMenu } from "../components/NavBar";
import { Footer } from "../components/footer"; 
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import emailjs from "emailjs-com";
import swal from 'sweetalert';

export function PageContac() {
  useEffect(() => {
    document.title = "Contáctanos | Comunikate Ecuador";
  }, []);
  
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    mensaje: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = (field, value) => {
    let error = "";
    if (field === "nombre") {
      const trimmed = value.trim();
      if (!trimmed) {
        error = "El nombre es obligatorio.";
      } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(trimmed)) {
        error = "El nombre solo puede contener letras y espacios.";
      }
    } else if (field === "email") {
      const trimmed = value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!trimmed) {
        error = "El correo electrónico es obligatorio.";
      } else if (!emailRegex.test(trimmed)) {
        error = "Ingresa un correo electrónico válido (ej: nombre@dominio.com).";
      }
    } else if (field === "celular") {
      if (!value) {
        error = "El número de celular es obligatorio.";
      } else if (value.length !== 10) {
        error = `El celular debe tener exactamente 10 dígitos (llevas ${value.length}).`;
      }
    } else if (field === "mensaje") {
      if (!value.trim()) {
        error = "El mensaje no puede estar vacío.";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    let sanitizedValue = value;

    if (id === "nombre") {
      // Solo permite letras (incluyendo acentos y ñ) y espacios
      sanitizedValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
    } else if (id === "celular") {
      // Solo permite números y máximo 10 dígitos
      sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [id]: sanitizedValue }));

    // Si había error en este campo, revalidar o limpiar al escribir
    if (errors[id]) {
      const currentError = validateField(id, sanitizedValue);
      setErrors((prev) => ({ ...prev, [id]: currentError }));
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    const fieldError = validateField(id, value);
    setErrors((prev) => ({ ...prev, [id]: fieldError }));
  };

  const validateAll = () => {
    const newErrors = {};
    ["nombre", "email", "celular", "mensaje"].forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateAll()) {
      swal({
        title: "Campos incorrectos o incompletos",
        text: "Por favor revisa los datos ingresados antes de enviar.",
        icon: "warning",
      });
      return;
    }

    setLoading(true);

    const serviceId = "service_2hfrmdm";
    const templateId = "template_5ldkfad";
    const publicKey = "_tfhrpj8o8dDHmUD-";

    const templateParams = {
      from_name: formData.nombre.trim(),
      from_email: formData.email.trim(),
      celular: formData.celular,
      message: formData.mensaje.trim()
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setFormData({ nombre: "", email: "", celular: "", mensaje: "" });
        setErrors({});
        swal({
          title: "¡Gracias por tu interés!",
          text: "Hemos recibido tus datos y te contactaremos a la brevedad.",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        swal({
          title: "¡Oops!",
          text: "Ha ocurrido un error al enviar tus datos. Por favor, inténtalo de nuevo.",
          icon: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <NavigationMenu />
      <main className="contact-page-shell">
      <div className="pageContac">
        <div className="pageContac-left">
          <h1 className="pageContac-title">CONTACTOS</h1>
          <div className="pageContac-info">
            <p className="info-address">Matiz Quito: Av. Luis Saá y Sadria, Edificio Daniel Cadena - 9no piso - Oficina 901</p>
            <p className="info-neighborhood">(Sector parque La Alameda)</p>
            <p className="info-email">Email: info@comunikate.academy</p>
            <p className="info-phone">Tel: +593 (99) 522 2922</p>
          </div>

          <div className="pageContac-branches">
            <h2 className="branches-title">Sucursales</h2>
            <ul>
              <li>Guayaquil</li>
              <li>Cuenca</li>
              <li>Santo Domingo de los Tsáchilas</li>
              <li>Manta</li>
              <li>Ambato</li>
            </ul>
          </div>
          <div className="pageContac-social">
            <a href="https://www.facebook.com/share/1EmVXMnZfz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className="social-icon" /></a>
            <a href="https://www.instagram.com/comunikate.academy" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="social-icon" /></a>
            <a href="https://www.tiktok.com/@comunikate.academy" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok className="social-icon" /></a>
          </div>
          
        </div>

        <div className="pageContac-right">
          <form className="pageContac-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="nombre">Nombre:</label>
            <input 
              id="nombre" 
              type="text" 
              value={formData.nombre} 
              onChange={handleChange} 
              onBlur={handleBlur}
              placeholder="Ingresa solo letras (ej: Juan Pérez)"
              className={errors.nombre ? "input-error" : ""}
              aria-invalid={!!errors.nombre}
            />
            {errors.nombre && <span className="field-error-text">{errors.nombre}</span>}
            
            <label htmlFor="email">E-Mail:</label>
            <input 
              id="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              onBlur={handleBlur}
              placeholder="ejemplo@correo.com"
              className={errors.email ? "input-error" : ""}
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="field-error-text">{errors.email}</span>}
            
            <label htmlFor="celular">Celular:</label>
            <input 
              id="celular" 
              type="tel" 
              inputMode="numeric"
              maxLength={10}
              value={formData.celular} 
              onChange={handleChange} 
              onBlur={handleBlur}
              placeholder="10 dígitos (ej: 0991234567)"
              className={errors.celular ? "input-error" : ""}
              aria-invalid={!!errors.celular}
            />
            {errors.celular && <span className="field-error-text">{errors.celular}</span>}
            
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea 
              id="mensaje" 
              rows="5" 
              value={formData.mensaje} 
              onChange={handleChange} 
              onBlur={handleBlur}
              placeholder="Escribe tu mensaje aquí..."
              className={errors.mensaje ? "input-error" : ""}
              aria-invalid={!!errors.mensaje}
            />
            {errors.mensaje && <span className="field-error-text">{errors.mensaje}</span>}

            <button type="submit" className="pageContac-submitButton" disabled={loading}>
              {loading ? "Enviando..." : "ENVIAR"}
            </button>
          </form>
        </div>
      </div>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7904015935846!2d-78.50055259999999!3d-0.21434299999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59bd595f6a6a5%3A0xcf57d1528fd56e10!2sComunikate%20Ecuador!5e0!3m2!1ses-419!2sec!4v1744388054764!5m2!1ses-419!2sec" 
        width="600" 
        height="450" 
        className="pageContac-map"
        title="Ubicación de Comunikate Ecuador"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </main>
      <Footer />
    </div>
  );
}
