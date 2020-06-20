import React from "react";

import "./button.scss";


const Button =({children ,classes, ...props})=>(
    <button className={classes} {...props} >{children}</button>
    );

    export default Button;
