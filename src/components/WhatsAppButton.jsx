import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';
import Logo from '../img/LOGO_NEGRO.png'; // Asegúrate de tener la imagen en esta ruta

const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="593983406064"
      accountName="Asistencia"
      avatar={Logo}
      statusMessage="Te respondermos en breve"
      initialMessageByServer='¡Hola! ¿En qué podemos ayudarte?'
      initialMessageByClient='Hola quisiera mas información'
      allowClickAway
      startChatText="Escribe aquí tu consulta"
      allowEsc
      notification
      notificationDelay={0}
      notificationSound
    />
  );
};

export default WhatsAppButton;
