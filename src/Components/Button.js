import React from "react";

function Button(props){
    return(
        <button
          className={`btn-ans`}
          disabled={props.disabled}
          onClick={props.onClick}>{props.value}
        </button>
    )
}

export default Button;