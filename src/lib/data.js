import { Global, Transaction } from "./schema";
import { connectToDB } from './utils'

export const fetchTransactions = async () => {
    try{
        connectToDB()
        const transactions = await Transaction.find()
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
