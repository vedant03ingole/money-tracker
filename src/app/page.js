import { fetchGlobals, fetchTransactions } from '../lib/data'

export default async function Home() {

  const { transactions } = await fetchTransactions()
  const globals = await fetchGlobals()
  console.log(globals)
  
  return (
    <>
      <div>Hello world</div>
      <div>
        <h1>All Transactions</h1>
        {transactions && transactions.map((transaction) => (
          <div key={transaction.id}>
            <h5>{transaction.category}</h5>
            <h5>{transaction.id}</h5>
          </div>
        ))}
        <br />

        {globals && globals.map((global) => (
          <div key={global.div}>
            <p>Total Expense{global.totalExpense}</p>
            <p>Total Income{global.totalIncome}</p>
          </div>
        ))}
      </div>
    </>
  );
}
