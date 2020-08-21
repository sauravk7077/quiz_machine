import React from 'react';
import Button from "./Button";
import Radio from "./Radio";
import {CSSTransition} from "react-transition-group";

class QuestBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: 0,
            active: false,
            answered: false,
            enter: true,
            key: Math.random()
        }
    }
    checkAns = (e)=>{
        if(!this.state.answered){
            this.setState({
                active: true,
                answered: true
            });
            console.log(this.state);
            if(this.props.data.answer == this.props.data.options[this.state.selected])
                this.props.addPoints();
        }
       
    }

    handleNext = (e)=>{
        this.setState({
            enter: false,
            key: Math.random()
        })
        this.props.onClick();
        
    }

    changeIndex = (i)=>{
        this.setState({
            selected: i
        });
    }

    render(){
        const fadeIn = {
            opacity: "1",
            width: "100%",
          };
          
          const fadeOut = {
            opacity: "0",
            width: "60%",
          };
        let {question, options, answer}= this.props.data;
        let rads = options.map((e,i)=>{
            let active;
            if(this.state.active)
            {
                if(e == answer)
                    active = "green";
                else
                    active = "red";
            }
            
            return<Radio key={i} value={e} active={active} name='questionValue' onChange={e=>{this.changeIndex(i)}} checked={this.state.selected == i}/>
        })
        return (
                <div className="questionBox" style={this.state.enter ? fadeIn : fadeOut} key={this.state.key}>
                    <div>{question}</div>
                    <div id="options">
                        {rads}
                    </div>
                    <div>
                        <Button value="Check your answer" onClick={this.checkAns}/>
                        <Button value="Next" disabled={!this.state.answered} onClick={this.handleNext}/>
                    </div>
                </div>
        )
    }
}

export default QuestBox;