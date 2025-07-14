// src/components/Botoncito/Botoncito.jsx
import React from 'react';
import './Botoncito.css'; // Asegúrate de que este archivo exista y tenga estilos para .botoncito

// Añadimos 'texto' como una nueva propiedad
const Botoncito = ({ color, texto }) => {
  const buttonStyle = {
    backgroundColor: color || 'gray', // Por defecto gris si no se especifica color
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };

  const handleHover = (e) => {
    e.target.style.backgroundColor = 'dark' + color || 'darkgray'; // Oscurece el color al pasar el ratón
  };

  const handleLeave = (e) => {
    e.target.style.backgroundColor = color || 'gray'; // Vuelve al color original
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={() => alert(`¡Hiciste clic en el botón ${texto || 'sin texto'}!`)} // Ejemplo de acción al hacer clic
    >
      {texto || 'Haz Clic'} {/* Muestra el texto pasado como prop, o "Haz Clic" por defecto */}
    </button>
  );
};

export default Botoncito;
