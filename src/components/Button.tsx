// components/Button.tsx
'use client';

import React from 'react';

const Button: React.FC = () => {
  // Função para o alerta
  const handleClick = () => {
    alert('Botão foi clicado!');
  };

  return (
    <button onClick={handleClick}>Clique em mim!</button>
  );
};

export default Button;
