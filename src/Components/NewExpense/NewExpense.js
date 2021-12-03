import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const HandlerOnSaveNewExpense = (enteredExpenseData) => {
    console.log("after reciveing  on save", enteredExpenseData);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSavenewExpense={HandlerOnSaveNewExpense} />
    </div>
  );
};

export { NewExpense };
