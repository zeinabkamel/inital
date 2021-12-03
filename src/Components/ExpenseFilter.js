import React, { useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  let [searchTerm, setsearchTerm] = useState(props.searchTerm);

  const dropdownChangeHandler = (event) => {
    debugger;
    setsearchTerm(searchTerm);
    props.onApplyFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <FaSearchengin />
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
