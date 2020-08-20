import React from 'react';
import Button from "./Button";
import Radio from "./Radio";
import cx from 'classnames';

class QuestBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: 0,
            active: false,
            answered: false,
            exit: false
        }
    }
    checkAns = (e)=>{
        this.setState({
            active: true,
            answered: true
        });
        if(this.props.data.answer == this.props.data.options[this.state.selected])
            this.props.addPoints();
    }

    handleNext = (e)=>{
        this.setState({
            exit: true
        })
        setTimeout(()=>{
                this.props.onClick();
        }, 1000)
        
    }

    changeIndex = (i)=>{

        this.setState({
            selected: i,
        });
    }

    render(){
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
            <div className={`${this.state.exit?'exit':'enter'}`}>
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