import React, { useState } from 'react';
import Picture from '../../images/homebanner.png';

const AiArt = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const imageStyle = {
    position: 'fixed',
    top: cursorPosition.y,
    left: cursorPosition.x,
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    opacity: hovered ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ width: '100%', height: '100vh' }}
    >
      {/* Replace 'image-url' with the URL of your desired image */}
      <img
        src={Picture}
        alt="Hover Image"
        style={imageStyle}
      />
    </div>
  );
};

export default AiArt;
