import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

/**
 * 📱 COMPONENTE: BOTÓN FLOTANTE DE WHATSAPP
 * Se recomienda colocarlo en el Layout principal para que sea persistente.
 */

const WhatsAppButton = () => {
  // Configuración del enlace
  const phoneNumber = "56990856075"; // Tu número de contacto
  const message = "Hola, necesito asesoría con mi plan de Isapre. Vengo desde la web.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(waLink, '_blank');
  };

  return (
    <Tooltip title="Hablar con un asesor" placement="left" arrow>
      <Fab
        color="success"
        aria-label="whatsapp"
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 30 }, // Margen inferior (más alto en desktop)
          right: { xs: 20, md: 30 },  // Margen derecho
          backgroundColor: '#25D366', // Color oficial de WhatsApp
          color: 'white',
          '&:hover': {
            backgroundColor: '#128C7E', // Color verde oscuro al pasar el mouse
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease-in-out'
          },
          zIndex: 1000, // Asegura que esté por encima de todo
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
      >
        <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppButton;