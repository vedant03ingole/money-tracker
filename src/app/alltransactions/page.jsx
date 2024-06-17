import { fetchTransactions } from '@/lib/data'
import Search from './search'

const AllTransactions = async ({searchParams}) => {

    const q = searchParams?.q || ""
    const transactions = await fetchTransactions(q) 

    // console.log("filtered transactions",  {transactions})
    return (
        <>
            <div className=''>AllTransactions</div>
            <Search />

            {transactions && transactions.map((transaction) => (
                <div key={transaction.id}>
                    <h3>{transaction.category}</h3>
                    <h5>{transaction.transactionType}</h5>
                </div>
            )) }
        </>
    )
}

export default AllTransactions