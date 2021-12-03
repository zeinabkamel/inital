import "./ExpenseItemDate.css";
function ExpenseItemDate(props) {
  console.log("propsfrom compnantDate", props);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthnumber = new Date(props.date).getMonth();

  const month = months[monthnumber];

  const Day = new Date(props.date).getDay();
  const Year = new Date(props.date).getFullYear();

  console.log("props", props);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{Year}</div>
      <div className="expense-date__day">{Day}</div>
    </div>
  );
}
export default ExpenseItemDate;
