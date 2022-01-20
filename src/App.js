import ExpenseItem from "./components/ExpenseItem";

function App() {
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

  return (
    <div>
      <h2>Let's get started folks!</h2>
      <ExpenseItem 
      title={expenses[0].title} 
      amount={expenses[0].amount} 
      date={expenses[0].date}
      />
     <ExpenseItem 
      title={expenses[1].title} 
      amount={expenses[1].amount} 
      date={expenses[1].date}
      />
      <ExpenseItem 
      title={expenses[2].title} 
      amount={expenses[2].amount} 
      date={expenses[2].date}
      />
       <ExpenseItem 
      title={expenses[3].title} 
      amount={expenses[3].amount} 
      date={expenses[3].date}
      />
    </div>
  );
}

export default App;
