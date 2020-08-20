import React from "react";
import Button from "./Button";

function End(props){
    return(
        <div>
            <Button value="Restart" onClick={props.onClick}/>
        </div>
    )
}

export default End;