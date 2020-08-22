import React from "react";
import Button from "./Button";
import Radio from "./Radio";

const fadeIn = {
  opacity: "1",
  width: "100%",
};

const fadeOut = {
  opacity: "0",
  width: "60%",
};

const fadeTime = 1000;
class QuestBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      active: false,
      answered: false,
      show: true,
      key: Math.random(),
    };
    this.checkAns = this.checkAns.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
  }
  checkAns(e) {
    if (!this.state.answered) {
      this.setState({
        active: true,
        answered: true,
      });
      console.log(this.props.data.options[this.state.selected]);
      if (
        this.props.data.answer == this.props.data.options[this.state.selected]
      )
        this.props.addPoints();
    }
  };

  fadeOutIn() {
    this.handleFade();
    setTimeout(() => {
      this.handleFade();
    }, fadeTime);
  }

  handleNext(e) {
    console.log('jj');
    this.setState({
      answered: false,
      enter: false,
      selected: 0,
      key: Math.random(),
    });
    console.log(this.props.onClick);
    this.props.onClick();
  };

  handleFade() {
    this.setState({ show: !this.state.show });
  }

  changeIndex(i) {
    this.setState({
      selected: i,
    });
  };

  render() {
    let { question, options, answer } = this.props.data;
    let rads = options.map((e, i) => {
      let active;
      if (this.state.active) {
        console.log(e);
        if (e == answer) active = "green";
        else active = "red";
      }

      return (
        <Radio
          key={i}
          value={e}
          active={active}
          name="questionValue"
          onChange={(e) => {
            this.changeIndex(i);
          }}
          checked={this.state.selected == i}
        />
      );
    });
    return (
      <div
        className="questionBox"
        style={this.state.show ? fadeIn : fadeOut}
        key={this.state.key}
      >
        <div>{question}</div>
        <div id="options">{rads}</div>
        <div>
          <Button value="Check your answer" onClick={this.checkAns} />
          <Button value="Next" onClick={this.fadeOutIn.bind(this)} />
        </div>
      </div>
    );
  }
}

export default QuestBox;
;