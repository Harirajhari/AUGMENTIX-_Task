const Expense = require('../models/Expense');

const getExpenses = async (req, res) => {
    const expenses = await Expense.find({});
    res.json(expenses);
};

const addExpense = async (req, res) => {
    const { title, amount, category } = req.body;
    const expense = new Expense({
        title,
        amount,
        category,
    });

    const createdExpense = await expense.save();
    res.status(201).json(createdExpense);
};

const editExpense = async (req, res) => {
    const { id } = req.params;
    const { title, amount, category } = req.body;

    const updatedExpense = await Expense.findByIdAndUpdate(
        id,
        { title, amount, category },
        { new: true }
    );

    if (updatedExpense) {
        res.json(updatedExpense);
    } else {
        res.status(404).json({ message: 'Expense not found' });
    }
};

const deleteExpense = async (req, res) => {
    const { id } = req.params;

    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (deletedExpense) {
        res.json({ message: 'Expense deleted' });
    } else {
        res.status(404).json({ message: 'Expense not found' });
    }
};

module.exports = { getExpenses, addExpense, editExpense, deleteExpense };
