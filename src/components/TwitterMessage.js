import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
      count: props.maxChars
    };
  }

  handleChange = (event) => {
    let charsLeft = 140 - event.target.value.length
    this.setState({
      value: event.target.value,
      count: charsLeft
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <div>Chars left: {this.state.count}</div>
      </div>
    );
  }
}

export default TwitterMessage;
