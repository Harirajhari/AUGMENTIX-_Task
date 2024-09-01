import React, { useState } from 'react';
import { createExpense } from '../api';
import './ExpenseForm.css';

const ExpenseForm = ({ fetchExpenses }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExpense = { title, amount, category };
        await createExpense(newExpense);
        fetchExpenses();
        setTitle('');
        setAmount('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
