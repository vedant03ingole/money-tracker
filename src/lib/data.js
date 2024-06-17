import { Global, Transaction } from "./schema";
import { connectToDB } from './utils'

export const fetchTransactions = async (q) => {
    console.log(q);
    const regex =new RegExp(q, "i")
    try{
        connectToDB()
        const transactions = await Transaction.find({category:{$regex:regex}})
        return transactions
        
    } catch(err){
        console.log(err)
        throw new Error('Failed to fetch')
    }
}

export const fetchGlobals = async () => {
    try{
        connectToDB()
        const globals = await Global.find()
        return globals
        
    } catch(err){
        console.log(err)
        throw new Error('Failed to fetch')
    }
}
