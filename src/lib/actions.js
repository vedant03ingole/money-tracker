import { Global, Transaction } from "./schema"
import { connectToDB } from "./utils"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// Add transaction
export  const addTransaction = async (formData) => {
    "use server"
    const { username, transactionType, category, transactionAmount, paymentMethod, transactionDate, description } = Object.fromEntries(formData)
    // console.log("Hello", username, "your transaction type is", category)

    try {
        connectToDB()
        const newTransaction = new Transaction({ username, transactionType, category, transactionAmount, paymentMethod, transactionDate, description })
        await newTransaction.save()

    } catch (error) {
        console.log(error)
        throw new Error("Failed to add transaction")
    }

    revalidatePath("/")
    redirect("/")
}

// delete the transaction
export  const deleteTransaction = async (formData) => {
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
export  const updateGlobals = async (formData) => {
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