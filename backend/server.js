const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const ExpenseModel = require('./models/expense-model')

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// CORS middleware
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: "GET,PUT,POST,DELETE",
        credentials: true,

    })
);
app.listen(PORT);

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log("Connected to the database")
})
.catch(() => {
    console.log("Connection failed");
})

// set collection name to the last name of the user (if last name not provided, use first name)
const setCollection = (req,res,next) => {
    const { collectionName } = req.params;
    req.Expense = mongoose.model(collectionName, ExpenseModel.schema);
    next();
};

// get all the expenses
app.get('/api/expenses/:collectionName/', setCollection, async (req,res) => {
    try {
        const expenses = await req.Expense.find({})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// post a single expense
app.post('/api/expenses/:collectionName', setCollection, async (req,res) => {
    try {
        const newExpense = await req.Expense.create(req.body);
        res.status(200).json(newExpense);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// update a single expense
app.put('/api/expenses/:collectionName/:id', setCollection, async (req,res) => {
    try {
        const { id } = req.params;
        const updatedExpense = await req.Expense.findByIdAndUpdate(id, req.body);

        if (!updatedExpense) {      
            return res.status(404).json({message: "Expense not found"});
        }
        res.status(200).json(await req.Expense.findById(id));
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// delete a single expense
app.delete('/api/expenses/:collectionName/:id', setCollection, async (req,res) => {
    try {
        const { id } = req.params;
        await req.Expense.findByIdAndDelete(id);

        const updatedExpenses = await req.Expense.find({});
        res.status(200).json(updatedExpenses);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})