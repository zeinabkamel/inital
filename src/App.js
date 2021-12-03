import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expense";
import { NewExpense } from "./Components/NewExpense/NewExpense";
const DummyData = [
  {
    date: new Date(2021, 12, 12).toDateString(),
    title: "Car BMW",
    amount: 500000,
  },
  {
    date: new Date(2021, 11, 11).toDateString(),
    title: "Car G2K",
    amount: 1000000,
  },
  {
    date: new Date(2021, 10, 11).toDateString(),
    title: "Car kia",
    amount: 2000000,
  },
  {
    date: new Date(2021, 9, 11).toDateString(),
    title: "Car lancer",
    amount: 500000,
  },
  {
    date: new Date(2021, 2, 11).toDateString(),
    title: "opel",
    amount: 1000000,
  },
];
function App() {
  const [ExpenseITemObject, SetExpenses] = useState(DummyData);
  const handlerOfAddExpense = (expenseData) => {
    console.log("inAppJS", expenseData);
    SetExpenses([expenseData, ...ExpenseITemObject]);
    console.log("after merge", ExpenseITemObject);
  };
  // const rended = ExpenseITemObject.map(function (item, i) {
  //   return <ExpenseItem key={i} expenseITemObject={item}></ExpenseItem>;
  // });
  return (
    <div>
      <NewExpense onAddExpense={handlerOfAddExpense} />
      <Expenses items={ExpenseITemObject} />
    </div>
  );
  // return <div className="App">{rended}</div>;
}

export default App;
