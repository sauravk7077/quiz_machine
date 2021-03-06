import React from "react";
import Button from "./Button";
import Select from "./Select";


const fadeTime = 1000;
class QuestBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      active: false,
      show: true,
    };
  }
  checkAns = (e)=> {
    if (!this.state.active) {
      this.setState({
        active: true
      },()=>{
        if (
          this.props.data.answer == this.props.data.options[this.state.selected]
        )
          this.props.addPoints();
      });
      
    }
  };


  handleNext = (e)=> {
    this.handleFade();
    setTimeout(()=>{
      this.setState({
        active: false,
        show: true,
        selected: 0,
      });
      this.props.handleNextBtn();
    }, fadeTime);
    
  };

  handleFade= ()=> {
    this.setState({ show: !this.state.show });
  }

  changeIndex= (i)=> {
    this.setState({
      selected: i,
    });
  };

  render() {
    let { question, options, answer } = this.props.data;
    let rads = options.map((e, i) => {
      let active;
      if (this.state.active) {
        if (e == answer){
         active = "green";
        }
        else 
          active = "red";
      }

      return (
        <Select
          key={i}
          value={e}
          ansed={this.state.active}
          active={active}
          name="questionValue"
          selected={this.state.selected == i}
          onClick={(e) => {
            this.changeIndex(i);
          }}
          checked={this.state.selected == i}
        />
      );
    });
    return (
      <div
        className={`questionBox ${this.state.show?'enter':'exit'}`}
      >
        <div className="mainQuestion">{question}</div>
        <div id="options">{rads}</div>
        <div className="buttons">
          <Button value="Check your answer" onClick={this.checkAns} />
          <Button value="Next" disabled={!this.state.active} onClick={this.handleNext} />
        </div>
      </div>
    );
  }
}

export default QuestBox;
;