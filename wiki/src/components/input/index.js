import React from "react";
import './input.css'
function Input({value, onChange}){
    return(
        <input value={value} onChange={onChange}>
            Input
        </input>
    )
}

export default Input