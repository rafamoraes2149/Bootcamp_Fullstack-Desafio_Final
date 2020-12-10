import React from 'react';

export default function Transaction({ element }) {
  return (
    <div style={styles.flexRow}>
      <div>
        <span>{element.day}</span>
      </div>
      <div>
        <span>{element.category}</span>
      </div>
      <div>
        <span>{element.description}</span>
      </div>
      <div>
        <span>{element.value}</span>
      </div>
      <div>
        <span>{element.type}</span>
      </div>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    //justifyContent: 'space-between',
    marginBottom: '40px',
  },
};
