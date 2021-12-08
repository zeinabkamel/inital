import react from "react";
import styles from "./button.css";

const Button = (props) => {
  console.log("Sf", styles);
  return (
    <button
      type={props.type}
      className={styles["button"]}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
