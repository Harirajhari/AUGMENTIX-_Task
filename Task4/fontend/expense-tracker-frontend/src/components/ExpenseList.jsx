import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ expenses, fetchExpenses }) => {
    return (
        <div>
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense._id}
                    expense={expense}
                    fetchExpenses={fetchExpenses}
                />
            ))}
        </div>
    );
};

export default ExpenseList;
