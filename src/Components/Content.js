import React from "react";
import QuestBox from "./QuestBox";
import {questions} from "../Questions";
import Button from "./Button";
import Home from "./Home";
import End from "./End"
import "../styles/main.css";

class Content extends React.Component{
    constructor() {
        super();
        this.state = {
            points: 0,
            mode: 'start',
            index: 0
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    addPoints = ()=>{
        this.setState(s=>({
            points: s.points + 1
        }))
    }

    handleCheckAns = (value,e)=> {
        
            if(this.state.index != questions.length-1){
                this.setState(s=>({
                    index: s.index + 1
                }))
            }else{
                this.setState({mode: 'finish'})
            }
        ;
    }

    handleClick = (e)=>{
        this.setState({
            mode: 'quiz'
        })
    }
    render(){
        let display;
        if(this.state.mode == 'start'){
            display = (
                <Home onClick={this.handleClick}/>
            )
        }else if(this.state.mode == 'quiz'){
            display = (
                <div>
                    <div>Points: {this.state.points}</div>
                    <QuestBox data={questions[this.state.index]} addPoints={this.addPoints} onClick={this.handleCheckAns}/>
                </div>
            )
        }else if(this.state.mode == 'finish'){
            display = (
                <div><End onClick={this.handleClick}/></div>
            )
        }
        return (
            <div>
                {display}
            </div>
            );
    }
}

export default Content;