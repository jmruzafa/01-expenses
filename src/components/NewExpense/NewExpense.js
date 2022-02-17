//optional
import React from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {

    //the way to pass data from child to parent
    //we pass a function pointer to the child that is executed in the parent
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.floor(Math.random() * 100).toString(),
            ...enteredExpenseData,            
        };
        props.onAddExpense(expenseData);
    };

    //the way to pass data from child to parent
    //we pass a function pointer to the child that is executed in the parent
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
    
};

export default NewExpense;