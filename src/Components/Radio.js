import React from "react"

function Radio(props){
    return (
        <div className={`radioBox  ${props.active?props.active:''}`}>
            <label><input type="radio" onChange={props.onChange} checked={props.checked} name={props.name}/>{props.value}</label>
        </div>
    )
}

export default Radio;