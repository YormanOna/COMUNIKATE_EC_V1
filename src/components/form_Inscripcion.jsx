import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import swal from 'sweetalert';
import "../styles/formInscripciones.css";

export function FormInscripcion() {
  const [selectCurso, setSelectCurso] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCursos, setFilteredCursos] = useState([]);
  const [comentarios, setComentarios] = useState("");
  const [errorCurso, setErrorCurso] = useState(""); // Estado para el mensaje de error

  const cursos = [
    "CURSO DE ORATORIA Y LOCUCIÓN", 
    "CURSO DE PRODUCCIÓN AUDIOVISUAL",
    "CURSO DE FOTOGRAFÍA",
    "CURSO DE PRESENTADOR DE TV Y MEDIOS DIGITALES",
    "CURSO DE STREAMING",
    "CURSO DE PERIODISMO DEPORTIVO",
    "CURSO DE MEDIA TRAINING",
    "CURSO DE RELACIONES PÚBLICAS",
    "CURSO DE LOCUCIÓN COMERCIAL",
    "CURSO DE REDACCIÓN PERIODÍSTICA",
    "CURSO DE MARKETING DIGITAL",
    "CURSO DE PODCAST",
    "CURSO DE FOTOGRAFÍA DE PRODUCTOS Y ALIMENTOS",
    "CURSO DE EDICIÓN Y GRABACIÓN DE AUDIO",
    "CURSO DE VENTAS",
    "OTROS",
  ];

  useEffect(() => {
    setFilteredCursos(
      cursos.filter((curso) =>
        curso.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleSelectCurso = (curso) => {
    setSelectCurso(curso);
    setIsDropdownOpen(false);
    setSearchTerm("");
    setErrorCurso(""); // Limpiar error al seleccionar un curso
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleComentariosChange = (e) => {
    setComentarios(e.target.value);
  };

  const enviarEmail = (e) => {
    e.preventDefault();
    const form = e.target;

    // Validar que se haya seleccionado un curso
    if (!selectCurso) {
      setErrorCurso("Por favor, selecciona un curso.");
      return; // No enviar el formulario
    }

    // Convertir campos a mayúsculas
    ['nombres', 'apellidos', 'estadoCivil', 'direccion', 'ciudad', 'ocupacion', 'comentarios'].forEach(field => {
      const input = form.elements[field];
      if (input) {
        input.value = input.value.toUpperCase();
      }
    });

    emailjs.sendForm('service_2hfrmdm', 'template_n9lhc0t', form, '_tfhrpj8o8dDHmUD-')
      .then((result) => {
          console.log(result.text);
          swal({
            title: "¡Gracias por tu interés!",
            text: "Hemos recibido tus datos y te contactaremos a la brevedad.",
            icon: "success",
          })
          setSelectCurso("");
          setComentarios("");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          swal({
            title: "¡Oops!",
            text: "Ha ocurrido un error al enviar tus datos. Por favor, inténtalo de nuevo.",
            icon: "error",
          })
      });
    e.target.reset();
  }

  return (
    <div className="container-form">
      <h2 className="title-form">
        Ingresa tus datos en este formulario y obtén la información del curso de
        tu interés y el proceso de matriculación.
      </h2>
      <form className="registration-form" onSubmit={enviarEmail}>
        <div className="input-group-form">
          <label className="label-form">Nombres y Apellidos</label>
          <div className="name-inputs-form">
            <input
              type="text"
              placeholder="Nombres"
              className="input-form name-input-form"
              name="nombres"
              pattern="[A-Za-zÑñÁáÉéÍíÓóÚú\s]+"
              title="Solo se permiten letras"
              required
            />
            <input
              type="text"
              placeholder="Apellidos"
              name="apellidos"
              className="input-form name-input-form"
              pattern="[A-Za-zÑñÁáÉéÍíÓóÚú\s]+"
              title="Solo se permiten letras"
              required
            />
          </div>
        </div>
        <div className="input-group-form">
          <label className="label-form">Email</label>
          <input
            type="email"
            placeholder="Ejemplo@example.com"
            className="input-form"
            name="email"
            title="Por favor ingrese un correo válido"
            required
          />
        </div>
        <div className="input-group-form">
          <label className="label-form">Número Móvil</label>
          <input 
            type="tel" 
            placeholder="Ej: +09x XXX-XXXX"
            className="input-form" 
            name="movil"
            pattern="^[0-9\+]{10,15}$"
            title="Por favor ingrese un número de teléfono válido"
          />
        </div>
        <div className="input-group-form">
          <label className="label-form">Número de Cédula</label>
          <input
            type="text"
            placeholder="XXXXXXXXXX"
            className="input-form"
            name="cedula"
            pattern="\d{10}"
            maxLength="10"
            title="Por favor ingrese un número de cédula válido"
          />
        </div>
        <div className="input-group-form">
          <label className="label-form">Edad</label>
          <input 
            type="number" 
            placeholder="XX" 
            className="input-form" 
            name="edad"
            min="5" 
            max="80" 
            title="Ingrese una edad válida"
            required  
          />
        </div>
        <div className="input-group-form">
          <label className="label-form">Estado Civil</label>
          <input 
            type="text" 
            placeholder="Soltero" 
            className="input-form"
            name="estadoCivil"
            pattern="[A-Za-z\s]+"
            title="Solo se permiten letras"
            required 
          />
        </div>
        <div className="input-group-form">
          <label className="label-form">Ciudad</label>
          <input 
            type="text" 
            placeholder="Ciudad" 
            className="input-form" 
            name="ciudad"
            required
          />
        </div>
        <div className="input-group-form">
          <label className="label-form">Dirección Domicilio</label>
          <input 
            type="text" 
            placeholder="Domicilio" 
            className="input-form" 
            name="direccion"
            required
          />
        </div>
        <div className="input-group-form">
          <label className="label-form">Ocupación</label>
          <input
            type="text"
            placeholder="Ingeniero en sistemas, Licenciatura en Diseño"
            className="input-form"
            name="ocupacion"
            required
          />
        </div>
        <div className="input-group-form">
          <label className="label-form">Seleccionar un Curso</label>
          <div className="custom-select-form">
            <div
              className="select-selected-form"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectCurso || "CURSOS"}
              <span className="select-arrow"></span>
            </div>
            {isDropdownOpen && (
              <div className="select-items-form">
                <div className="search-container-form">
                  <input
                    type="text"
                    placeholder="Buscar curso..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input-form"
                    name="cursoSearch"
                  />
                </div>
                <div className="options-container-form">
                  {filteredCursos.map((curso) => (
                    <div
                      key={curso}
                      onClick={() => {
                        handleSelectCurso(curso);
                        setIsDropdownOpen(false);
                      }}
                      className="select-item-form"
                    >
                      {curso}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <input type="hidden" name="curso" value={selectCurso} required />
          {errorCurso && <p className="error-message-form">{errorCurso}</p>} {/* Mostrar mensaje de error */}
        </div>
        <div className="input-group-form">
          <label className="label-form">Comentarios (opcional)</label>
          <textarea
            className="input-form"
            placeholder="Comentarios"
            rows="4"
            name="comentarios"
            value={comentarios}
            onChange={handleComentariosChange}
          />
        </div>
        <button type="submit" className="submit-button-form">
          Enviar
        </button>
      </form>
    </div>
  );
}
