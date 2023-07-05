import React from "react";
import styles from "./ErrorModal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const ErrorModal = (props) => {
  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Invalid Input</h2>
        </header>
        <div className={styles.content}>{props.children}</div>
        <footer className={styles.actions}>
          <Button onClick={props.onClose}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
