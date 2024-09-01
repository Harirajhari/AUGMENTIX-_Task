import React, { useEffect, useState } from 'react';
import { fetchExpenses } from '../api';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import './ExpensePage.css';

const ExpensePage = () => {
    const [expenses, setExpenses] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    const getExpenses = async () => {
        const { data } = await fetchExpenses();
        setExpenses(data);
    };

    useEffect(() => {
        getExpenses();
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`container ${darkMode ? 'dark' : ''}`}>
            <h1>Expense Tracker</h1>
            <button onClick={toggleDarkMode} className="toggle-button">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <ExpenseForm fetchExpenses={getExpenses} />
            <ExpenseList expenses={expenses} fetchExpenses={getExpenses} />
        </div>
    );
};

export default ExpensePage;
