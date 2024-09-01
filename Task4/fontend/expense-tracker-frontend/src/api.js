import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api/expenses' });

export const fetchExpenses = () => API.get('/');
export const createExpense = (newExpense) => API.post('/', newExpense);
export const updateExpense = (id, updatedExpense) =>
    API.put(`/${id}`, updatedExpense);
export const deleteExpense = (id) => API.delete(`/${id}`);
