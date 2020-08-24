import React from "react"

function Select(props){
    return (
        <button
         className={`selectBtn ${props.ansed?props.active:''} ${props.selected?'selected':''}`} 
         tabIndex="1"
         onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Select;