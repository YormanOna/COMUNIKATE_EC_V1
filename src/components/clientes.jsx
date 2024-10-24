import React from 'react';
import '../styles/clientes.css';
import IMAGEN1 from '../img/clientes/colegio_aleman.png';
import IMAGEN2 from '../img/clientes/emaps.png';
import IMAGEN3 from '../img/clientes/EXSA.png';
import IMAGEN4 from '../img/clientes/image_q2.png';
import IMAGEN5 from '../img/clientes/image.png';
import IMAGEN6 from '../img/clientes/Latacunga.png';
import IMAGEN7 from '../img/clientes/Logo_CIESPAL.png';
import IMAGEN8 from '../img/clientes/logo-mi-municipalidad-gye.png';
import IMAGEN9 from '../img/clientes/logobomberos.png';
import IMAGEN10 from '../img/clientes/Policia_cooperativa.png';
import IMAGEN11 from '../img/clientes/policia.png';
import IMAGEN12 from '../img/clientes/sony.png';

export function ClientLogos () {
  const clients = [
    {
        name: 'Colegio Alemán Humboldt',
        imageUrl: IMAGEN1,
        link: '#'
    },
    {
        name: 'EMAPS',
        imageUrl: IMAGEN2,
        link: '#'
    },
    {
        name: 'EXSA',
        imageUrl: IMAGEN3,
        link: '#'
    },
    {
        name: 'Image Q2',
        imageUrl: IMAGEN4,
        link: '#'
    },
    {
        name: 'Image',
        imageUrl: IMAGEN5,
        link: '#'
    },
    {
        name: 'Latacunga',
        imageUrl: IMAGEN6,
        link: '#'
    },
    {
        name: 'CIESPAL',
        imageUrl: IMAGEN7,
        link: '#'
    },
    {
        name: 'Municipio de Guayaquil',
        imageUrl: IMAGEN8,
        link: '#'
    },
    {
        name: 'Bomberos',
        imageUrl: IMAGEN9,
        link: '#'
    },
    {
        name: 'Policía Cooperativa',
        imageUrl: IMAGEN10,
        link: '#'
    },
    {
        name: 'Policía Nacional',
        imageUrl: IMAGEN11,
        link: '#'
    },
    {
        name: 'Sony',
        imageUrl: IMAGEN12,
        link: '#'
    }
  ];

  return (
    <div className="clients-section">
      <h2 className="clients-title">NUESTROS CLIENTES</h2>
      
      <div className="clients-grid">
        {clients.map((client) => (
          <a
            key={client.name}
            href={client.link}
            className="client-card"
          >
            <div className="client-card-inner">
              <div className="client-image-container">
                <img
                  src={client.imageUrl}
                  alt={`${client.name} logo`}
                  className="client-image"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

