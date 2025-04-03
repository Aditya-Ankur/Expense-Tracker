const mongoose = require('mongoose')

const ExpenseSchema = mongoose.Schema(
    {
        item: {
            type: String,
            required: [true, "Enter the item you purchased"]
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        quantity: {
            type: Number,
            required: true,
            default: 1
        },

        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const ExpenseModel = mongoose.model("Expense", ExpenseSchema);
module.exports = ExpenseModel;