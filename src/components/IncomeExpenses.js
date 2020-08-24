import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'


export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts.filter((item) => item > 0).reduce((sum,item) => sum + item, 0)
    const expense = amounts.filter((item) => item < 0).reduce((sum,item) => sum + item, 0)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>INCOME</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>EXPENSES</h4>
                <p className="money minus">-${expense}</p>
            </div>
        </div>
    )
}