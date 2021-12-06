import "./App.css";
import AddCourse from "./Compoents/Courses/AddCourse";
import CourseGoalList from "./Compoents/Courses/CourseGoalList";
import react, { useState } from "react";
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);
  const HandleAddGoal = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <div>
      <section id="goal-form">
        <AddCourse onAddGoal={HandleAddGoal} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
