import React from 'react';
import { Target, Users, Building2 } from 'lucide-react';
import '../../styles/misionVision.css';

export function MissionVisionStyled () {
    return (
        <div className="cards_container_qst">
          <div className="card_item_qst">
            <div className="card_content_qst">
              <div className="card_background_qst"></div>
              <div className="card_background_qst"></div>
              <div className="card_background_qst"></div>
              <div className="card_front_qst">
                <div className="title_container_qst">
                  <h2>MISIÓN</h2>
                  <Target size={54} />
                </div>
                <p>
                  Contribuir al mejoramiento y optimización de los recursos tecnológicos 
                  informáticos y de comunicación en el campo educativo, productivo y 
                  profesional del Ecuador a través de procesos de capacitación en el 
                  área periodística, comunicacional y audiovisual.
                </p>
              </div>
            </div>
          </div>
    
          <div className="card_item_qst">
            <div className="card_content_qst">
              <div className="card_background_qst"></div>
              <div className="card_background_qst"></div>
              <div className="card_background_qst"></div>
              <div className="card_front_qst">
                <div className="title_container_qst">
                  <h2>VISIÓN</h2>
                  <Users size={54} />
                </div>
                <p>
                  Ser la empresa líder en el país en servicios de capacitación y gestión 
                  en el campo periodístico, comunicacional y audiovisual, con valores de 
                  profesionales y que aporta al desarrollo productivo del país.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    };