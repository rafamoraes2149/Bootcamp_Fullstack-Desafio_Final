import axios from 'axios';

const API_URL = 'http://localhost:3001/api/transaction';

async function getAPITransactions(year, month) {
  const query = `?period=${year}-${month}`;
  //console.log(API_URL + query);
  const res = await axios.get(API_URL + query);
  const { transactions } = res.data;
  return transactions;
}

export { getAPITransactions };
