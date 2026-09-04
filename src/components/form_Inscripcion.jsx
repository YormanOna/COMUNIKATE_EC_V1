import React, { useMemo, useState } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import "../styles/formInscripciones.css";

const cursosDisponibles = ["CURSO DE ORATORIA Y LOCUCIÓN", "CURSO DE PRODUCCIÓN AUDIOVISUAL", "CURSO DE FOTOGRAFÍA", "CURSO DE PRESENTADOR DE TV Y MEDIOS DIGITALES", "CURSO DE STREAMING", "CURSO DE PERIODISMO DEPORTIVO", "CURSO DE MEDIA TRAINING", "CURSO DE RELACIONES PÚBLICAS", "CURSO DE LOCUCIÓN COMERCIAL", "CURSO DE REDACCIÓN PERIODÍSTICA", "CURSO DE MARKETING DIGITAL", "CURSO DE PODCAST", "CURSO DE FOTOGRAFÍA DE PRODUCTOS Y ALIMENTOS", "CURSO DE EDICIÓN Y GRABACIÓN DE AUDIO", "CURSO DE VENTAS", "OTROS"];
const initialValues = { nombres: "", apellidos: "", email: "", movil: "", cedula: "", edad: "", estadoCivil: "", ciudad: "", direccion: "", ocupacion: "", curso: "", comentarios: "" };
const requiredFields = ["nombres", "apellidos", "email", "movil", "cedula", "edad", "estadoCivil", "ciudad", "direccion", "ocupacion", "curso"];

function validateField(name, value) {
  const clean = value.trim();
  if (requiredFields.includes(name) && !clean) return "Este campo es obligatorio.";
  if (["nombres", "apellidos", "estadoCivil"].includes(name) && clean && !/^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/.test(clean)) return "Solo se permiten letras.";
  if (name === "email" && clean && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) return "Ingresa un correo electrónico válido.";
  if (name === "movil" && clean && !/^\d{10}$/.test(clean)) return "El número móvil debe tener 10 dígitos.";
  if (name === "cedula" && clean && !/^\d{10}$/.test(clean)) return "La cédula debe tener 10 dígitos.";
  if (name === "edad" && clean && (Number(value) < 5 || Number(value) > 80)) return "La edad debe estar entre 5 y 80 años.";
  return "";
}

export function FormInscripcion() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const filteredCursos = useMemo(() => cursosDisponibles.filter((curso) => curso.toLowerCase().includes(searchTerm.toLowerCase())), [searchTerm]);
  const formIsValid = requiredFields.every((field) => values[field].trim() && !validateField(field, values[field]));

  const updateField = (name, value) => {
    const normalizedValue = ["nombres", "apellidos"].includes(name)
      ? value.replace(/[^A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]/g, "")
      : name === "cedula"
        ? value.replace(/\D/g, "").slice(0, 10)
        : name === "movil"
          ? value.replace(/\D/g, "").slice(0, 10)
        : value;
    setValues((current) => ({ ...current, [name]: normalizedValue }));
    if (touched[name]) setErrors((current) => ({ ...current, [name]: validateField(name, normalizedValue) }));
  };
  const handleBlur = (name) => {
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: validateField(name, values[name]) }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Capturar el elemento del formulario ANTES de cualquier llamada async.
    // React puede anular event.currentTarget al liberar el SyntheticEvent,
    // lo que provocaba una excepción dentro del .then() que el .catch() interpretaba
    // erróneamente como un fallo de envío.
    const formElement = event.currentTarget;
    const nextErrors = Object.fromEntries(Object.keys(values).map((field) => [field, validateField(field, values[field])]));
    setErrors(nextErrors);
    setTouched(Object.fromEntries(Object.keys(values).map((field) => [field, true])));
    if (Object.values(nextErrors).some(Boolean) || !formIsValid) return;
    setIsSubmitting(true);
    emailjs.send(
      "service_2hfrmdm",
      "template_n9lhc0t",
      Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()])),
      "_tfhrpj8o8dDHmUD-"
    )
      .then(() => {
        swal({ title: "¡Gracias por tu interés!", text: "Hemos recibido tus datos y te contactaremos a la brevedad.", icon: "success" });
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setSearchTerm("");
        setIsDropdownOpen(false);
        formElement.reset();
      })
      .catch((err) => {
        console.error("[FormInscripcion] Error al enviar con EmailJS:", err);
        swal({ title: "¡Oops!", text: "Ha ocurrido un error al enviar tus datos. Por favor, inténtalo de nuevo.", icon: "error" });
      })
      .finally(() => setIsSubmitting(false));
  };
  const fieldProps = (name) => ({ name, value: values[name], onChange: (event) => updateField(name, event.target.value), onBlur: () => handleBlur(name), "aria-invalid": Boolean(touched[name] && errors[name]), "aria-describedby": touched[name] && errors[name] ? `${name}-error` : undefined });
  const renderError = (name) => touched[name] && errors[name] ? <p id={`${name}-error`} className="error-message-form" role="alert">{errors[name]}</p> : null;

  return <div className="container-form">
    <h2 className="title-form">Ingresa tus datos para recibir información del curso y del proceso de matriculación.</h2>
    <form className="registration-form" onSubmit={handleSubmit} noValidate>
      <div className="form-section-heading">Información personal</div>
      <div className="input-group-form input-group-wide"><label className="label-form" htmlFor="nombres">Nombres y apellidos</label><div className="name-inputs-form"><div className="field-wrapper-form"><input id="nombres" type="text" placeholder="Nombres" className="input-form" {...fieldProps("nombres")} />{renderError("nombres")}</div><div className="field-wrapper-form"><input id="apellidos" type="text" placeholder="Apellidos" className="input-form" {...fieldProps("apellidos")} />{renderError("apellidos")}</div></div></div>
      <div className="input-group-form"><label className="label-form" htmlFor="email">Email</label><input id="email" type="email" placeholder="ejemplo@correo.com" className="input-form" {...fieldProps("email")} />{renderError("email")}</div>
      <div className="input-group-form"><label className="label-form" htmlFor="movil">Número móvil</label><input id="movil" type="tel" inputMode="tel" placeholder="Ej: +593999999999" className="input-form" {...fieldProps("movil")} />{renderError("movil")}</div>
      <div className="input-group-form"><label className="label-form" htmlFor="cedula">Número de cédula</label><input id="cedula" type="text" inputMode="numeric" maxLength="10" placeholder="XXXXXXXXXX" className="input-form" {...fieldProps("cedula")} />{renderError("cedula")}</div>
      <div className="input-group-form"><label className="label-form" htmlFor="edad">Edad</label><input id="edad" type="number" min="5" max="80" placeholder="Edad" className="input-form" {...fieldProps("edad")} />{renderError("edad")}</div>
      <div className="input-group-form"><label className="label-form" htmlFor="estadoCivil">Estado civil</label><input id="estadoCivil" type="text" placeholder="Soltero" className="input-form" {...fieldProps("estadoCivil")} />{renderError("estadoCivil")}</div>
      <div className="input-group-form"><label className="label-form" htmlFor="ciudad">Ciudad</label><input id="ciudad" type="text" placeholder="Ciudad" className="input-form" {...fieldProps("ciudad")} />{renderError("ciudad")}</div>
      <div className="input-group-form"><label className="label-form" htmlFor="direccion">Dirección domiciliaria</label><input id="direccion" type="text" placeholder="Domicilio" className="input-form" {...fieldProps("direccion")} />{renderError("direccion")}</div>
      <div className="input-group-form"><label className="label-form" htmlFor="ocupacion">Ocupación</label><input id="ocupacion" type="text" placeholder="Ej: Diseñador" className="input-form" {...fieldProps("ocupacion")} />{renderError("ocupacion")}</div>
      <div className="input-group-form input-group-wide"><label className="label-form" id="curso-label">Selecciona un curso</label><div className={`custom-select-form ${touched.curso && errors.curso ? "has-error-form" : ""}`}><button type="button" className="select-selected-form" aria-labelledby="curso-label" aria-expanded={isDropdownOpen} onClick={() => setIsDropdownOpen((open) => !open)}>{values.curso || "Selecciona un curso"}<span className="select-arrow" /></button>{isDropdownOpen && <div className="select-items-form"><div className="search-container-form"><input type="search" placeholder="Buscar curso..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} className="search-input-form" aria-label="Buscar curso" /></div><div className="options-container-form">{filteredCursos.length ? filteredCursos.map((curso) => <button type="button" key={curso} onClick={() => { updateField("curso", curso); setTouched((current) => ({ ...current, curso: true })); setErrors((current) => ({ ...current, curso: "" })); setIsDropdownOpen(false); setSearchTerm(""); }} className="select-item-form">{curso}</button>) : <p className="empty-options-form">No se encontraron cursos.</p>}</div></div>}</div><input type="hidden" name="curso" value={values.curso} />{renderError("curso")}</div>
      <div className="input-group-form input-group-wide"><label className="label-form" htmlFor="comentarios">Comentarios <span>(opcional)</span></label><textarea id="comentarios" className="input-form textarea-form" placeholder="Comentarios" rows="4" {...fieldProps("comentarios")} /></div>
      <button type="submit" className="submit-button-form" disabled={!formIsValid || isSubmitting}>{isSubmitting ? "Enviando…" : "Enviar solicitud"}</button>
    </form>
  </div>;
}
