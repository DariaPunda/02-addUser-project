import React from "react";
import styles from "./Button.module.css"

const Button = (props) => {
    return (
        <button className={`${props.className} ${styles.button}`} onClick={props.onClick} type={props.type}>{props.children}</button>
    )
};

export default Button;