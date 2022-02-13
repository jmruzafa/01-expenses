import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    //function clickHandler() {}
    //always returns an array with the element and the function to update the element
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');
        
    const clickHandler = () => {
        setTitle('Updated!');
        //it will show the previous titles as it is not updated on the fly but schedule the update
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler /*point at, not execute so no '()' added */}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;