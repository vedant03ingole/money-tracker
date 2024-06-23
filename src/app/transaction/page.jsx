import { addTransaction } from '@/lib/actions'

const Transaction = () => {

    //   const handleSubmit = async (formData) => {
    //     "use server"
    //   }
    return (
        <>
            <div>Add Transaction</div>
            <div className="text-black w-full h-full flex justify-center">
                <form
                    action={addTransaction}
                    className=' flex flex-col justify-center items-center p-3 m-3 w-72'
                >
                    {/* <form action={handleSubmit}> */}

                    {/* Transaction type */}
                    <select name="transactionType" defaultValue="transactionType" required className='select'>
                        <option value="transactionType" disabled hidden>Transaction type</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                        <option value="Transfer">Transfer</option>
                    </select>

                    {/* Category */}
                    <select name="category" defaultValue="category" required className='select'>
                        <option value="category" disabled hidden>Transaction Category</option>
                        <option value="Rent">Rent</option>
                        <option value="Mess">Mess</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Food">Food</option>
                        <option value="Other">Other expenses</option>
                    </select>

                    {/* Transaction Amount */}
                    <input type="number" name="transactionAmount" required className='input'/>

                    {/* Patment Method */}
                    <select name="paymentMethod" defaultValue="paymentMethod" className='select'>
                        <option value="paymentMethod" disabled hidden>Payment method</option>
                        <option value="Online">Online</option>
                        <option value="Cash">Cash</option>
                    </select>

                    {/* transaction date */}
                    <input type="date" name="transactionDate" required className='input' />

                    {/* Description */}
                    <textarea name="description" className='select'></textarea>


                    <button className="text-black font-semibold cursor-pointer bg-blue-400 mt-3 rounded-md p-5 w-full  hover:bg-slate-600 hover:text-whitesmoke transition-all" type="submit">Add Transaction</button>
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