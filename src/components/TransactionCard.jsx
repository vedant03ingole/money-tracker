import React from 'react'

const TransactionCard = async ({ transactions }) => {

    return (
        <>
            <div>
                {transactions && transactions.map((transaction) => (
                    <div key={transaction.id} className='min-w-[19.75rem] max-w-full rounded-4xs [background:linear-gradient(93.31deg,_#2a3485,_#191e47)] flex flex-row items-center justify-between py-[1rem] px-[0.687rem] my-2 mx-2 box-border text-left text-whitesmoke font-inter'>
                        <div className='self-stretch overflow-hidden flex flex-col items-start justify-center gap-[0.75rem]'>
                            <div className='relative font-semibold text-[16px]'>{transaction.category}</div>
                            <div className="text-xs">{transaction.paymentMethod}</div>
                        </div>
                        <div className="overflow-hidden flex flex-col items-end justify-center gap-[0.75rem]">
                            <div className={`${transaction.transactionType === "Income" ? 'text-green-800' : 'text-red-700'} text-[16px] font-bold`}>{transaction.transactionAmount}</div>
                            <div className="text-xs">{transaction.transactionDate.toString().slice(4, 16)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TransactionCard