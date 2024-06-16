import { fetchTransactions } from '../lib/data'

export default async function Home() {

  const transactions = await fetchTransactions()
  
  return (
    <>
      <div>Hello world</div>
      <div>
        <h1>All Transactions</h1>
        {transactions && transactions.map((transaction) => (
          <div key={transaction.id}>
            <h1>{transaction.category}</h1>
            <h1>{transaction.id}</h1>
          </div>
        ))}
        <br />
      </div>
    </>
  );
}
