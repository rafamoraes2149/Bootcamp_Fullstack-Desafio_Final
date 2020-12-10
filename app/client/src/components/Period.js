import React from 'react';

export default function Period({ year, month, onChangePeriod }) {
  const handleSelectChange = (evento) => {
    evento.persist();
    const { id, value } = evento.target;
    //console.log(typeof value);
    onChangePeriod(id, value);
  };

  return (
    <div className="browser-default" style={styles.flexRow}>
      <label>Escolha o ano:</label>
      <select
        className="browser-default"
        name="ano"
        id="ano"
        onChange={handleSelectChange}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
      <label>Escolha o mês:</label>
      <select
        className="browser-default"
        name="mes"
        id="mes"
        onChange={handleSelectChange}
      >
        <option value="01">Jan</option>
        <option value="02">Fev</option>
        <option value="03">Mar</option>
        <option value="04">Abr</option>
        <option value="05">Mai</option>
        <option value="06">Jun</option>
        <option value="07">Jul</option>
        <option value="08">Ago</option>
        <option value="09">Set</option>
        <option value="10">Out</option>
        <option value="11">Nov</option>
        <option value="12">Dez</option>
      </select>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
  },
};
