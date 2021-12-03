import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
// const ExpenseITemObject = [
//   {
//     date: new Date(2021, 12, 12).toDateString(),
//     Title: "Car BMW",
//     Price: 500000,
//   },
//   {
//     date: new Date(2021, 11, 11).toDateString(),
//     Title: "Car G2K",
//     Price: 1000000,
//   },
// ];
// const rended = ExpenseITemObject.map(function (item, i) {
//   return <ExpenseItem key={i} expenseITemObject={item}></ExpenseItem>;
// });
const Expenses = (props) => {
  console.log("probfromExpense", props);
  const rended = props.items.map(function (item, i) {
    return <ExpenseItem key={i} expenseITemObject={item}></ExpenseItem>;
  });

  return <Card className="expenses">{rended}</Card>;
};

export default Expenses;
