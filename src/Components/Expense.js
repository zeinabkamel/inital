import React, { useEffect, useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  let expensedContentFilter = props.items;
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filterdList, setFilterdList] = useState(props.items);
  const HandlerOnApplySearch = (selectedyear) => {
    debugger;

    setFilteredYear(selectedyear);
    let list = [];
    if (selectedyear != null)
      list = props.items.filter(
        (ent) => new Date(ent.date).getFullYear() == selectedyear
      );
    else {
      list = props.items;
    }
    setFilterdList(list);
    console.log(setFilterdList);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected="2020"
        searchTerm=""
        onApplyFilter={HandlerOnApplySearch}
      />
      ;<ExpensesChart expenses={filterdList} />
      {filterdList.length > 0 ? (
        filterdList.map((expense, i) => (
          <ExpenseItem key={i} expenseITemObject={expense} />
        ))
      ) : (
        <p>No Filtered Data exist</p>
      )}
    </Card>
  );
};

export default Expenses;
