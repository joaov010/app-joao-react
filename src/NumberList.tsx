// NumberList.tsx
import React, { useState } from 'react';

const NumberList: React.FC = () => {
  // Inicializa a lista com números de 1 a 10
  const [numbers, setNumbers] = useState<number[]>(
    Array.from({ length: 10 }, (_, i) => i + 1)
  );

  // Função para adicionar um número aleatório à lista
  const addRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    setNumbers([...numbers, randomNumber]); // Adiciona o número à lista existente
  };

  return (
    <div>
      <h1>Lista de numero </h1>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={addRandomNumber}>Adicione qualquer numero</button>
    </div>
  );
};

export default NumberList;
