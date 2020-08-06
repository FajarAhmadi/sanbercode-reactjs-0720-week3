import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: new Date(),
      time: 0,
    };
  }

  updateTimer() {
    this.setState({
      clock: new Date(),
      time: this.state.time - 1,
    });
  }

  componentDidMount() {
    if (this.props.start !== undefined) {
      this.setState({ time: this.props.start });
    }
    this.timerID = setInterval(() => this.updateTimer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidUpdate() {
    if (this.state.time === 0) {
      this.componentWillUnmount();
    }
  }

  render() {
    return (
      <>
        {this.state.time > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "60%",
              margin: "auto",
            }}
          >
            <h1>sekarang jam : {this.state.clock.toLocaleTimeString()}</h1>
            <h1>hitung mundur : {this.state.time}</h1>
          </div>
        )}
      </>
    );
  }
}
