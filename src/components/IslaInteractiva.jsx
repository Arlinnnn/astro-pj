import React, { useState } from 'react';

const IslaInteractiva = ({ icono, titulo, descripcion }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`isla ${hovered ? 'isla-hovered' : ''}`} 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <img src={icono} alt={`${titulo} icon`} className="isla-icono" />
      <h3>{titulo}</h3>
      
      {/* Mostrar descripción solo cuando hovered es true */}
      {hovered && (
        <p className="isla-descripcion">
          {descripcion}
        </p>
      )}
    </div>
  );
};

export default IslaInteractiva;
