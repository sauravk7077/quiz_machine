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
        this.handleCheckAns = this.handleCheckAns.bind(this);
    }

    addPoints = ()=>{
        this.setState(s=>({
            points: s.points + 1
        }))
    }

    handleCheckAns(e){
           console.log('h'); 
            if(this.state.index != questions.length-1){
                console.log('index');
                this.setState(s=>({
                    index: s.index + 1
                }))
            }else{
                this.setState({index: 0,mode: 'finish'})
            }
            this.forceUpdate();
        ;
    }

    handleClick(e){
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
                    <QuestBox key={Math.random()} data={questions[this.state.index]} addPoints={this.addPoints} onClick={this.handleCheckAns}/>
                </div>
            )
        }else if(this.state.mode == 'finish'){
            display = (
                <div><End onClick={this.handleClick}/></div>
            )
        }
        return (
            <div className="questBox">
                <div>{display}</div>
            </div>
            );
    }
}

export default Content;