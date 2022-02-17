import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //this is a valid way of keeping the state of different components or parts within a component
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmoumt] = useState('');
    const [enteredDate, setEnteredDate] = useState(''); 
    const [formStyle, setFormStyle] = useState({display:'none'});
    const [addExpenseBtnStyle, setAddExpenseBtnStyle] = useState({display:''});

    //this is also used when we have to store multiples states
    //but you have to save all the states to avoid they get lost 
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

   
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,//copy of existing values of different states to avoid they get lost 
        //     enteredTitle: event.target.value,
        // })
        
        //safer way to keep the previous state updates if you need to preserve them!
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });

    };
    const amountChangeHandler = (event) => {
        setEnteredAmoumt(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const addExpenseHandler = () => {
        console.log('button pressed!');
        setFormStyle({display:''})
        setAddExpenseBtnStyle({display:'none'});
    }

    const submitHandler = (event) => {
        event.preventDefault();//stop default behaviour for browser of sending the form to the server
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
         //two way binding. Values are assigned as props into the html
        setEnteredTitle('');
        setEnteredAmoumt('');
        setEnteredDate('');

        //reset form view 
        setAddExpenseBtnStyle({display:''});
        setFormStyle({display:'none'});
    };

    return (
            <div>
                <div className='new-expense__actions' style={addExpenseBtnStyle}>
                    <button onClick={addExpenseHandler} >Add New Expense</button>
                </div>
                <div style={formStyle} >
                    <form onSubmit={submitHandler}>
                        <div className="new-expense__controls">
                            <div className="new-expense__control">
                                <label>Title</label>
                                <input 
                                    type='text' 
                                    value={enteredTitle} 
                                    onChange={titleChangeHandler}
                                />
                            </div>
                            <div className="new-expense__control">
                                <label>Amount</label>
                                <input type='number' 
                                min='0.02' 
                                step='0.01' 
                                value={enteredAmount} 
                                onChange={amountChangeHandler}/>
                            </div>
                            <div className="new-expense__control">
                                <label>Date</label>
                                <input type='date' 
                                min='2019-01-01' 
                                step='2022-02-28' 
                                value={enteredDate}  
                                onChange={dateChangeHandler} />
                            </div>
                        </div>
                        <div className='new-expense__actions'>
                            <button type='submit' >Add Expense</button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default ExpenseForm;