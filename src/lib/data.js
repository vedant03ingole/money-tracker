import { Global, Transaction } from "./schema";
import { connectToDB } from './utils'

export const fetchTransactions = async (q, page) => {
    console.log(q);
    const regex =new RegExp(q, "i")

    const ITEMS_PER_PAGE = 6

    try{
        connectToDB()
        const count = await Transaction.find({category:{$regex:regex}}).count()
        const transactions = await Transaction.find({category:{$regex:regex}}).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE*(page-1))
        // const transactions = await Transaction.find({category:{$regex:regex}})
        return { count, transactions }
        
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
