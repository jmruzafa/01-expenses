import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
 
const DUMMY_EXPENSES = [
  {
    id :"e1", 
    title: "Toilet paper", 
    amount: 30.55, 
    date: new Date(2022,1,6)
  },
  {
    id :"e2", title: "New TV", amount: 799.99, date: new Date(2022,2,9) },
  {
    id :"e3", 
    title: "Car Insurance", 
    amount: 398.45, 
    date: new Date(2022,3,16)
  },
  {
    id :"e4", 
    title: "Supermarket", 
    amount: 109.45, 
    date: new Date(2019,1,12)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {

    console.log(expense);

    setExpenses((prevExpenses) => {
      
      return [expense, ...prevExpenses];
    });
  }


  //old way to write React. Then we should import React in the top of the file
  /* return React.createElement(
    'div',
    {},
    React.createElement(Expenses, {items: expenses})
  ); */
  
  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
