import { fetchTransactions } from '../lib/data' 
import { connectToDB } from "@/lib/utils";

export default async function Home() {

  // const transactions = await fetchTransactions()
  await connectToDB()
  
  return (
    <>
      <div>Hello world</div>
      <div>
        <h1>All Transactiosn</h1>
        {transactions.map((transaction) => (
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
