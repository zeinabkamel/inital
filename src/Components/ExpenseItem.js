import { useState } from "react";
import ExpenseItemDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  console.log("props", props);
  //   const date = new Date(2021, 12, 2).toDateString();
  //   const title = "ZiziCar";
  //   const amount = 569000.65;
  const [title, settitle] = useState(props.expenseITemObject.title);
  const changtitleHandler = () => {
    props.expenseITemObject.title = "updated";
    settitle(props.expenseITemObject.title);
    console.log(props.expenseITemObject.title);
    console.log(title);
  };
  return (
    <div className="expense-item">
      <ExpenseItemDate date={props.expenseITemObject.date}></ExpenseItemDate>
      <div className="expense-item__description">
        <h2>{props.expenseITemObject.title}</h2>
        <div className="expense-item__amount">
          {props.expenseITemObject.amount}$
        </div>
        <div>
          <button onClick={changtitleHandler}>Changetitle</button>
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
