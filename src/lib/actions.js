import { fetchGlobals } from "./data"
import { Global, Transaction } from "./schema"
import { connectToDB } from "./utils"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// Add transaction
export const addTransaction = async (formData) => {

    "use server"
    const { transactionType, category, transactionAmount, paymentMethod, transactionDate, description } = Object.fromEntries(formData)

    const globals = await fetchGlobals()
    globals && globals.map((global) => {
        if (transactionType === "income") {
            const latestIncome = global.totalIncome + parseInt(transactionAmount)
            updateIncome(global.id, latestIncome)
        } else {
            const latestExpense = global.totalExpense + parseInt(transactionAmount)
            updateExpense(global.id, latestExpense)
        }
    })

    try {
        connectToDB()
        const newTransaction = new Transaction({ transactionType, category, transactionAmount, paymentMethod, transactionDate, description })
        await newTransaction.save()

    } catch (error) {
        console.log(error)
        throw new Error("Failed to add transaction")
    }

    revalidatePath("/")
    redirect("/")
}

// delete the transaction
export const deleteTransaction = async (formData) => {
    "use server"
    const { id } = Object.fromEntries(formData)

    try {
        connectToDB()
        await Transaction.findByIdAndDelete(id)

    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete transaction")
    }

    revalidatePath("/")
    // redirect("/")
}

// Update the Globals
export const updateGlobals = async (formData) => {
    "use server"
    const { id, totalIncome, totalExpense } = Object.fromEntries(formData)

    try {
        connectToDB()
        const updateFields = { totalIncome, totalExpense }
        Object.keys(updateFields).forEach(key => (updateFields[key] === "" || undefined) && delete updateFields[key])
        await Global.findByIdAndUpdate(id, updateFields)

    } catch (error) {
        console.log(error)
        throw new Error("Failed to update globals")
    }

    revalidatePath("/")
    redirect("/")
}


// Update Total Expense
export const updateExpense = async (id, latestExpense) => {
    "use server"
    try {
        connectToDB()
        await Global.findByIdAndUpdate(id, { totalExpense: latestExpense })
    } catch (error) {
        console.log(error)
        throw new Error("Failed to update expense")
    }
}

// Update Total Income
export const updateIncome = async (id, latestIncome) => {
    "use server"
    try {
        connectToDB()
        await Global.findByIdAndUpdate(id, { totalIncome: latestIncome })
    } catch (error) {
        console.log(error)
        throw new Error("Failed to update income")
    }
}