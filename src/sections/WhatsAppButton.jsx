import React from "react";
import PropTypes from "prop-types";

const WhatsAppButton = ({
  phoneNumber, // Número de teléfono (ahora obligatorio)
  message = "¡Hola! Me gustaría más información.", // Mensaje por defecto
  size = 56, // Tamaño del botón por defecto
  iconSize = 32, // Tamaño del ícono
  backgroundColor = "linear-gradient(135deg, #7A5FFF, #9B72FF)", // Gradiente morado
  boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)", // Sombra por defecto
  position = { bottom: "24px", right: "24px" }, // Posición flotante
}) => {
  // Validación dinámica para usar un número por defecto si no se proporciona uno
  const finalPhoneNumber = phoneNumber || "573228726267";

  // Generar enlace de WhatsApp
  const whatsappLink = `https://wa.me/${finalPhoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed flex items-center justify-center rounded-full z-50 animate-bounce"
      style={{
        width: size,
        height: size,
        background: backgroundColor,
        boxShadow: boxShadow,
        ...position,
      }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="white"
        style={{ width: iconSize, height: iconSize }}
      >
        <path d="M4.5 20c0-8.56 7.44-15.5 16.5-15.5S37.5 11.44 37.5 20 30.06 35.5 21 35.5c-2.44 0-4.56-.56-6.56-1.5L7.5 37.5l2.5-7.06c-2.06-2.5-5.5-6.06-5.5-10.44zm21.56 9.5c-.5-.44-2-1.31-3.13-1.75-1.13-.44-2-.19-2.63.25-.63.44-1 1.12-1.94 1-.94-.12-2.62-1.19-3.69-2.19-.5-.5-.94-1-.81-1.44.12-.44.56-1.44 1-1.88.44-.44.63-.56.94-.94.31-.38.19-.63-.19-.94-.37-.31-.44-.5-.81-.94-.38-.44-1.12-1.44-1.12-2.25s.31-1.56.63-1.88c.5-.62 1.13-.94 1.69-.94h.19c.25 0 .5 0 .63.06.13.06.38.13.5.5.12.37.62 1.87.75 2.19.13.31.25.37.5.25s.69-.37 1.12-.62c.44-.25.88-.06 1.12.06.25.12 1.75 1.25 1.94 1.5.19.25.19.44.13.62-.06.19-.19.31-.38.5-.19.19-.5.44-.75.69-.25.25-.44.38-.06.88.37.5 1.25 1.19 1.88 1.56.63.37 1.19.63 1.56.31s.75-.88 1.12-1.31.5-.44.94-.25c.44.19 2.5 1.25 2.94 1.44.44.19.75.25.87.44.12.19.12 1.12-.25 1.69-.37.56-1.5 2-1.87 2.5-.37.5-.75.62-1.31.62-.56-.01-1.68-.32-2.25-.81z" />
      </svg>
    </a>
  );
};

// Validación de propiedades con PropTypes
WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string, // Número de WhatsApp
  message: PropTypes.string, // Mensaje inicial
  size: PropTypes.number, // Tamaño del botón
  iconSize: PropTypes.number, // Tamaño del ícono
  backgroundColor: PropTypes.string, // Color o gradiente de fondo
  boxShadow: PropTypes.string, // Estilo de la sombra
  position: PropTypes.object, // Posición flotante del botón
};

export default WhatsAppButton;
