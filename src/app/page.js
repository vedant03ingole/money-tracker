import { deleteTransaction, updateGlobals } from '@/lib/actions';
import { fetchGlobals, fetchTransactions } from '../lib/data'

export default async function Home() {

  const { transactions } = await fetchTransactions()
  const globals = await fetchGlobals()

  return (
    <>
      <div>Hello world</div>
      <div>
        <h1>All Transactions</h1>
        {transactions && transactions.map((transaction) => (
          <div key={transaction.id}>
            <h5>{transaction.category}</h5>
            <h5>{transaction.id}</h5>
            <form action={deleteTransaction}>
              <input type="hidden" name="id" value={transaction.id} />
              <button>Delete</button>
            </form>
          </div>
        ))}
        <br />

        {globals && globals.map((global) => (
          <div key={global.id}>
            <p>Total Income{global.totalIncome}</p>
            <p>Total Expense{global.totalExpense}</p>

            <h3>Update globals</h3>
            <form action={updateGlobals}>
              <input type="hidden" name="id" value={global.id} />
                <input type="number" name="totalIncome" className='bg-black text-white'/>
                <input type="number" name="totalExpense" className='bg-black text-white mx-5' />
              <button type='submit'>Update</button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}
