import React from 'react';

export default function Filter({ text, onChangeFilter }) {
  const handleChange = (evento) => {
    evento.persist();
    const { value } = evento.target;
    onChangeFilter(value);
  };

  return (
    <div>
      <label for="filter">Filtro:</label>
      <input
        type="text"
        id="filter"
        name="filter"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}
