import React, { useState, useEffect } from 'react';

import Period from './components/Period';
import Filter from './components/Filter';
import Transactions from './components/Transactions';

import * as api from './api/apiServise';

export default function App() {
  const [transactions, setTransactions] = useState([]);

  const [currentYear, setCurrentYear] = useState('2019');
  const [currentMonth, setCurrentMonth] = useState('01');
  const [filter, setFilter] = useState('');

  const [qtdeReceita, setQtdeReceita] = useState(0);
  const [qtdeDespesa, setQtdeDespesa] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  //Efeito para baixar as transações da API de acordo com o período
  //Foi utilizada uma função específica para uso apropriado do async/await
  useEffect(() => {
    const getTransactions = async (year, month) => {
      const APItransactions = await api.getAPITransactions(year, month);
      //console.log(APItransactions);
      setTransactions(APItransactions);
    };

    getTransactions(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  useEffect(() => {
    let somaReceita = 0;
    let somaDespesa = 0;
    let saldo = 0;
    transactions.forEach((element) => {
      if (element.type === '+') {
        somaReceita++;
        saldo += element.value;
      }
      if (element.type === '-') {
        somaDespesa++;
        saldo -= element.value;
      }
    });
    setQtdeReceita(somaReceita);
    setQtdeDespesa(somaDespesa);
    setTotalSum(saldo);
  }, [transactions]);

  const handleChangePeriod = (id, value) => {
    if (id === 'ano') setCurrentYear(value);
    if (id === 'mes') setCurrentMonth(value);
  };

  const handleChangeFilter = (newFilter) => {
    setFilter(newFilter);
    setTransactions(
      transactions.filter((element) => {
        let { description } = element;
        let descriptionLow = description.toLowerCase();
        return descriptionLow.includes(newFilter.toLowerCase());
      })
    );
  };

  return (
    <div>
      <h2>Desafio Final do Bootcamp Full Stack</h2>
      <Period
        year={currentYear}
        month={currentMonth}
        onChangePeriod={handleChangePeriod}
      />
      <Filter text={filter} onChangeFilter={handleChangeFilter} />
      <div className="browser-defalt" style={styles.flexRow}>
        <span>Entradas: {transactions.length}</span>
        <span>Receitas: {qtdeReceita}</span>
        <span>Despesas: {qtdeDespesa}</span>
        <span>Saldo: {totalSum}</span>
      </div>
      <Transactions transactionList={transactions} />
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
