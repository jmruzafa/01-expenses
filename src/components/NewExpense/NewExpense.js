//optional
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';


const NewExpense = (props) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const addExpenseHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler =() =>
        setIsEditing(false);

    //the way to pass data from child to parent
    //we pass a function pointer to the child that is executed in the parent
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.floor(Math.random() * 100).toString(),
            ...enteredExpenseData,            
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    //the way to pass data from child to parent
    //we pass a function pointer to the child that is executed in the parent
    return <div className="new-expense">
        {!isEditing && <button onClick={addExpenseHandler} >Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
    
};

export default NewExpense;