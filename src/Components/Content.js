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
    }

    handleReset =()=>{
        this.setState({
            points: 0,
            mode: 'quiz',
            index: 0
        })
    }

    addPoints = ()=>{
        this.setState(s=>({
            points: s.points + 1
        }))
    }

    handleNextQuestion=(e)=>{
        if(this.state.index != questions.length-1){
            this.setState(s=>({
                index: s.index + 1
            }))
        }else{
            this.setState({index: 0,mode: 'finish'})
        }
    }

    handleStartClick =(e)=>{
        this.setState({
            mode: 'quiz'
        })
    }
    render(){
        let display;
        if(this.state.mode == 'start'){
            display = (
                <Home onClick={this.handleStartClick}/>
            )
        }else if(this.state.mode == 'quiz'){
            display = (
                    <QuestBox data={questions[this.state.index]} addPoints={this.addPoints} handleNextBtn={this.handleNextQuestion}/>
            )
        }else if(this.state.mode == 'finish'){
            display = (
                <div><End score={this.state.points} onClick={this.handleReset}/></div>
            )
        }
        return (
            <div className="questBox">
                {display}
            </div>
            );
    }
}

export default Content;