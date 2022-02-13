import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
 
const App = () => {
  const expenses = [
    {
      id :"e1", 
      title: "Toilet paper", 
      amount: 30.55, 
      date: new Date(2022,1,6)
    },
    {
      id :"e2", title: "New TV", amount: 799.99, date: new Date(2022,1,9) },
    {
      id :"e3", 
      title: "Car Insurance", 
      amount: 398.45, 
      date: new Date(2022,1,16)
    },
    {
      id :"e4", 
      title: "Supermarket", 
      amount: 109.45, 
      date: new Date(2022,1,12)
    }
  ];

  //old way to write React. Then we should import React in the top of the file
  /* return React.createElement(
    'div',
    {},
    React.createElement(Expenses, {items: expenses})
  ); */
  return (
    <div>
     <NewExpense />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
