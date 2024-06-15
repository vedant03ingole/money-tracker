import { Transaction } from "./schema"
import { connectToDB } from "./utils"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export  const addTransaction = async (formData) => {
    "use server"
    const { username, transactionType, category, transactionAmount, paymentMethod, transactionDate, description } = Object.fromEntries(formData)
    console.log("Hello", username, "your transaction type is", category)

    try {
        connectToDB()
        console.log("connected")

        const newTransaction = new Transaction({ username, transactionType, category, transactionAmount, paymentMethod, transactionDate, description })
        await newTransaction.save()

    } catch (error) {
        console.log(error)
        throw new Error("Failed to add transaction")
    }

    revalidatePath("/")
    redirect("/")
}