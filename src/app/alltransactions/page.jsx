import { fetchTransactions } from '@/lib/data'
import Search from './search'
import Pagination from './pagination'
import TransactionCard from '@/components/TransactionCard'

const AllTransactions = async ({ searchParams }) => {

    const q = searchParams?.q || ""
    const page = searchParams?.page || 1
    const { count, transactions } = await fetchTransactions(q, page)

    console.log(transactions)

    console.log("filtered transactions", { transactions })
    return (
        <>
            <div className='flex flex-col justify-center items-center w-full'>
            <div className='font-bold text-xl'>AllTransactions</div>
            <div >
                <Search />
            </div>
                <TransactionCard transactions={transactions} />
                <Pagination count={count} />
            </div>

            {/* {transactions && transactions.map((transaction) => (
                <div key={transaction.id} className=''>
                    <h3>{transaction.category}</h3>
                    <h5>{transaction.transactionType}</h5>
                </div>
            )) } */}

        </>
    )
}

export default AllTransactions