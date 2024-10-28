import React from "react";
import { Wifi, Camera, Mail, Coffee, Users } from "lucide-react";
import "../../styles/servicios/ContenidoAdicional.css";
export function ContenidoAdicional() {
  return (
    <div>
      <div className="container-tarjetService">
        <h2 className="title-tarjetService">TODOS LOS PLANES</h2>
        <p className="subtitle-tarjetService">INCLUYEN</p>
        <div className="services-tarjetService">
          <div className="service-item-tarjetService">
          <p>Wifi de alta velocidad</p>
            <Wifi className="icon-tarjetService" />
          </div>
          <div className="service-item-tarjetService">
          <p>Edificio con seguridad 24/7</p>
            <Camera className="icon-tarjetService" />
          </div>
          <div className="service-item-tarjetService">
          <p>Recepción de correspondencia</p>
            <Mail className="icon-tarjetService" />
          </div>
          <div className="service-item-tarjetService">
          <p>Café y agua ilimitado</p>
            <Coffee className="icon-tarjetService" />
          </div>
          <div className="service-item-tarjetService">
          <p>Sala de Reuniones o capacitación</p>
            <Users className="icon-tarjetService" />
          </div>
        </div>
      </div>
    </div>
  );
}
