import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [Value, SetValue] = useState({
    entererdTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const HandleTitleChanges = (event) => {
    SetValue({ ...Value, entererdTitle: event.target.value });
  };
  const HandleAmountChanges = (event) => {
    SetValue({ ...Value, enteredAmount: event.target.value });
  };
  const HandleDateChanges = (event) => {
    SetValue({ ...Value, enteredDate: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      title: Value.entererdTitle,
      amount: Value.enteredAmount,
      date: new Date(Value.enteredDate),
    };
    console.log("Ya Zizi", newExpense);
    props.onSavenewExpense(newExpense);

    SetValue({
      ...Value,
      entererdTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={Value.entererdTitle}
            onChange={HandleTitleChanges}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={HandleAmountChanges}
            value={Value.enteredAmount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={HandleDateChanges}
            type="date"
            value={Value.enteredDate}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
