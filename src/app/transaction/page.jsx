import { addTransaction } from '@/lib/actions'

const AddTransaction = () => {
    return (
        <>
            <div>AddTransaction</div>
            <div className="text-black">
                <form action={addTransaction}>

                    {/* Transaction type */}
                    <select name="transactionType" defaultValue="transactionType" required>
                        <option value="transactionType" disabled hidden>Transaction type</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                        <option value="transfer">Transfer</option>
                    </select>

                    {/* Category */}
                    <select name="category" defaultValue="category" required>
                        <option value="category" disabled hidden>Transaction Category</option>
                        <option value="rent">Rent</option>
                        <option value="mess">Mess</option>
                        <option value="petrol">Petrol</option>
                        <option value="food">Food</option>
                        <option value="other">Other expenses</option>
                    </select>

                    {/* Transaction Amount */}
                    <input type="number" name="transactionAmount" required />

                    {/* Patment Method */}
                    <select name="paymentMethod" defaultValue="paymentMethod">
                        <option value="paymentMethod" disabled hidden>Payment method</option>
                        <option value="online">Online</option>
                        <option value="cash">Cash</option>
                    </select>

                    {/* transaction date */}
                    <input type="date" name="transactionDate" required />

                    {/* Description */}
                    <textarea name="description" >Description</textarea>


                    <button className="text-white" type="submit">Send</button>
                </form>
            </div>
        </>
    )
}

export default AddTransaction