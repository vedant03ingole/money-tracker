import { deleteTransaction, updateGlobals } from '@/lib/actions';
import { fetchGlobals, fetchTransactions } from '../lib/data'
import Link from 'next/link';
import TransactionCard from '@/components/TransactionCard';

export default async function Home() {

  const { transactions } = await fetchTransactions()
  const globals = await fetchGlobals()

  return (
    <>
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='flex justify-between min-w-[19.75rem]'>
          <div className='font-bold text-lg'>Latest Transactions</div>
          <div>
            <Link href="/transaction">
              <button className='py-1 rounded-md cursor-pointer'>Add Transaction</button>
            </Link>
          </div>
        </div>
        <TransactionCard transactions={transactions} />
        {/* {transactions && transactions.map((transaction) => (
          <div key={transaction.id} className='min-w-[19.75rem] max-w-full rounded-4xs [background:linear-gradient(93.31deg,_#2a3485,_#191e47)] flex flex-row items-center justify-between py-[1rem] px-[0.687rem] my-2 mx-2 box-border text-left text-whitesmoke font-inter'>
            <div className='self-stretch overflow-hidden flex flex-col items-start justify-center gap-[0.75rem]'>
              <div className='relative font-semibold text-[16px]'>{transaction.category}</div>
              <div className="text-xs">{transaction.paymentMethod}</div>
            </div>
            <div className="overflow-hidden flex flex-col items-end justify-center gap-[0.75rem]">
              <div className={`${transaction.transactionType === "Income" ? 'text-green-800' : 'text-red-700'} text-[16px] font-bold`}>{transaction.transactionAmount}</div>
              <div className="text-xs">{transaction.transactionDate.toString().slice(4, 16)}</div>
            </div>


            <form action={deleteTransaction}>
              <input type="hidden" name="id" value={transaction.id} />
              <button>Delete</button>
            </form>
          </div>
        ))} */}

        <div>
          <Link href='/alltransactions'>
            <button className='py-1 rounded-md cursor-pointer'>All Transactions</button>
          </Link>
        </div>

        {/* {globals && globals.map((global) => (
          <div key={global.id}>
            <p>Total Income{global.totalIncome}</p>
            <p>Total Expense{global.totalExpense}</p>

            <h3>Update globals</h3>
            <form action={updateGlobals}>
              <input type="hidden" name="id" value={global.id} />
              <input type="number" name="totalIncome" className='bg-black text-white' />
              <input type="number" name="totalExpense" className='bg-black text-white mx-5' />
              <button type='submit'>Update</button>
            </form>
          </div>
        ))} */}
      </div>
    </>
  );
}
