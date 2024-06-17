import { addTransaction } from '@/lib/actions'

const Transaction = () => {

//   const handleSubmit = async (formData) => {
//     "use server"
//   }
    return (
        <>
            <div>Transaction</div>
            <div className="text-black">
                <form action={addTransaction}>
                {/* <form action={handleSubmit}> */}

                    {/* Transaction type */}
                    <select name="transactionType" defaultValue="transactionType" required>
                        <option value="transactionType" disabled hidden>Transaction type</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                        <option value="Transfer">Transfer</option>
                    </select>

                    {/* Category */}
                    <select name="category" defaultValue="category" required>
                        <option value="category" disabled hidden>Transaction Category</option>
                        <option value="Rent">Rent</option>
                        <option value="Mess">Mess</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Food">Food</option>
                        <option value="Other">Other expenses</option>
                    </select>

                    {/* Transaction Amount */}
                    <input type="number" name="transactionAmount" required />

                    {/* Patment Method */}
                    <select name="paymentMethod" defaultValue="paymentMethod">
                        <option value="paymentMethod" disabled hidden>Payment method</option>
                        <option value="Online">Online</option>
                        <option value="Cash">Cash</option>
                    </select>

                    {/* transaction date */}
                    <input type="date" name="transactionDate" required />

                    {/* Description */}
                    <textarea name="description" defaultValue="Description"></textarea>


                    <button className="text-white" type="submit">Send</button>
                </form>
            </div>
        </>
    )
}

export default Transaction


// import React from 'react'

// const Transaction = () => {
//   return (
//     <div>Transaction</div>
//   )
// }

// export default Transaction