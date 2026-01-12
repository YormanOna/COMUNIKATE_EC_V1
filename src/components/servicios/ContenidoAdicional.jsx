import React from "react";
import { Wifi, Camera, Mail, Coffee, Users } from "lucide-react";
import "../../styles/servicios/ContenidoAdicional_new.css";

export function ContenidoAdicional() {
  const services = [
    { icon: Wifi, title: "WIFI DE ALTA VELOCIDAD", description: "Conexión rápida y estable" },
    { icon: Camera, title: "SEGURIDAD 24/7", description: "Edificio vigilado las 24 horas" },
    { icon: Mail, title: "RECEPCIÓN DE CORRESPONDENCIA", description: "Servicio de mensajería incluido" },
    { icon: Coffee, title: "CAFÉ Y AGUA ILIMITADO", description: "Bebidas gratis todo el día" },
    { icon: Users, title: "SALA DE REUNIONES", description: "Espacios para capacitación" }
  ];

  return (
    <div className="content-additional">
      <div className="title-content-additional">
        <h2>TODOS LOS PLANES INCLUYEN</h2>
      </div>
      
      <div className="services-grid-tarjetService">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={index} 
              className="service-card-tarjetService"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon-wrapper">
                <IconComponent size={32} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
