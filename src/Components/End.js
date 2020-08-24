import React from "react";
import Button from "./Button";

function End(props){
    return(
        <div class="end">
            <h3>Score: {props.score * 10}</h3>
            <Button value="Restart" onClick={props.onClick}/>
            <p>A right anwer adds 10 points to your score.</p>
        </div>
    )
}

export default End;