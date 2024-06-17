import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    transactionType: {
        type: String,
        enum: ["Income", "Expense", "Transfer"],
        required: true
    },
    category:{
        type: String,
        enum:['Rent', 'Mess', 'Petrol', 'Food', 'Other']
    },
    transactionAmount:{
        type: Number,
        required: true
    },
    paymentMethod:{
        type: String,
        enum:["Online", "Cash"],
        required: true
    },
    transactionDate: {
        type: Date,
        required:true
        },
        description:{
        type: String
    }
},
{ timestamps: true }
)

const globalSchema = new mongoose.Schema({
    totalExpense:{
        type: Number,
    },
    totalIncome:{
        type: Number
    }
})
export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema)
export const Global = mongoose.models.Global || mongoose.model("Global", globalSchema)