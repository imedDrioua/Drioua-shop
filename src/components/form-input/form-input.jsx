import React from "react";

import "./form-input.scss";

const FormInput = ({label ,handlchange, ...props})=>(
    <div className="group">
    <input onChange={handlchange} className="form-input" { ...props} />
    {
        label && (<label  className={`${props.value.length && "shrink"}  form-input-label `}>
            {label}
        </label>)
    }
    </div>
)

export default FormInput;