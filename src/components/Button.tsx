import React from "react";
import "./Button.css";

const Button = (props:any) => {
    return <button className="colored">{props.label} </button>;
};

export default Button;