import React from 'react';
import Transaction from './Transaction';

export default function Transactions({ transactionList }) {
  return (
    <div className="row">
      {transactionList.map((transaction) => {
        return <Transaction element={transaction} />;
      })}
    </div>
  );
}
