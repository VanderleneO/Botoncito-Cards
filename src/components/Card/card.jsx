// src/components/Card/Card.jsx
import React from 'react';
import './Card.css';

// Ahora, el componente espera 'emoji' y 'meaning', y 'imageUrl' es opcional.
const Card = ({ imageUrl, title, description, emoji, meaning }) => { // Eliminamos 'population' y 'area'
  return (
    <div className="card">
      {/* Mostramos la imagen SOLO si imageUrl está presente */}
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}

      {/* Aquí mostramos el emoji si está presente */}
      {emoji && <div className="emoji-display">{emoji}</div>}

      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {/* La descripción ahora será el significado del emoji si estamos en modo emoji */}
        {description && <p className="card-description">{description}</p>}
        {meaning && <p className="card-meaning">{meaning}</p>}
      </div>
    </div>
  );
};

export default Card;