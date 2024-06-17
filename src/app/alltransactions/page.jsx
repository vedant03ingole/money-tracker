import { fetchTransactions } from '@/lib/data'
import Search from './search'
import Pagination from './pagination'

const AllTransactions = async ({searchParams}) => {

    const q = searchParams?.q || ""
    const page = searchParams?.page || 1
    const { count, transactions } = await fetchTransactions(q, page) 

    console.log(transactions)

    console.log("filtered transactions",  {transactions})
    return (
        <>
            <div >AllTransactions</div>
            <Search />

            {transactions && transactions.map((transaction) => (
                <div key={transaction.id}>
                    <h3>{transaction.category}</h3>
                    <h5>{transaction.transactionType}</h5>
                </div>
            )) }

            <Pagination count={count} />
        </>
    )
}

export default AllTransactions