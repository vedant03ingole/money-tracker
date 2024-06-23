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
            <div >AllTransactions</div>
            <div className=''>
                <Search />
            </div>
            <div className='flex flex-col justify-center items-center w-full'>
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