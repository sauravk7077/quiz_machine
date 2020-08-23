import React from "react";
import Button from "./Button";

function Home(props) {
    return (
        <div><Button onClick={props.onClick} value="Favourite Foods Quiz"></Button></div>
    )
}

export default Home;