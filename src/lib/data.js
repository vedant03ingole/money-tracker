import { Transaction } from "./schema";
import { connectToDB } from './utils'

export const fetchTransactions = async () => {
    try{
        await connectToDB()
        const transactions = await Transaction.find()
        return transactions
        
    } catch(err){
        console.log(err)
        throw new Error('Failed to fetch')
    }
}