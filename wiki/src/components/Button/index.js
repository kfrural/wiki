import React from "react";
import './button.css'
function Button(onClick){
    return(
        <button onClick={onClick}>
            Buscar
        </button>
    )
}

export default Button