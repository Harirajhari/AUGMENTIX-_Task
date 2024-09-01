import React from 'react';
import { deleteExpense } from '../api';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, fetchExpenses }) => {
    const handleDelete = async () => {
        await deleteExpense(expense._id);
        fetchExpenses();
    };

    return (
        <div>
            <h3>{expense.title}</h3>
            <p>Amount: {expense.amount}</p>
            <p>Category: {expense.category}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ExpenseItem;
