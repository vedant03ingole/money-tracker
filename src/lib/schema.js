import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    transactionType: {
        type: String,
        enum: ["income", "expense", "transfer"],
        required: true
    },
    category:{
        type: String,
        enum:['rent', 'mess', 'petrol', 'food', 'other']
    },
    transactionAmount:{
        type: Number,
        required: true
    },
    paymentMethod:{
        type: String,
        enum:["online", "cash"],
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