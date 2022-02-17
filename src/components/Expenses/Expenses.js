import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';



const Expenses = (props) => {

    console.log(props);
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    //how to show filtered items
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
            

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter yearSelected={filteredYear} 
                onChangeFilter={filterChangeHandler}
                />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    );
}
export default Expenses;