import React, { Fragment } from "react";
import  ReactDOM  from "react-dom";
import styles from "./ErrorModal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Backdrop = props => {
  return     <div className={styles.backdrop} onClick={props.handleBackdrop}/>

};

const ModalOverlay = props => {
 return <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Invalid Input</h2>
        </header>
        <div className={styles.content}>{props.children}</div>
        <footer className={styles.actions}>
          <Button onClick={props.onClose}>Okay</Button>
        </footer>
      </Card>
}

const ErrorModal = (props) => {
  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  };

  return (
    <Fragment>
   {ReactDOM.createPortal(<Backdrop handleBackdrop={handleBackdrop}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay onClose={props.onClose} children={ props.children} />, document.getElementById('overlay-root'))}
      
    </Fragment>
  );
};
export default ErrorModal;
