import React, { useState } from 'react';

const Ratio: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value={null}>Disponible</option>
      <option value="yes">Oui</option>
      <option value="no">Non</option>
    </select>
  );
};

export default Ratio;