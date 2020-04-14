import React from "react";
import { Interval } from "./interval";
import { connect } from "../my-redux/connect";

class TimerView extends React.Component {
  constructor() {
    super();
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);

    this.state = {
      currentTime: 0,
      interval: null
    };
  }

  render() {
    return (
      <>
        <Interval />
        <div>Секундомер: {this.state.currentTime} сек.</div>
        <>
          <button onClick={this.handleStart}>Старт</button>
          <button onClick={this.handleStop}>Стоп</button>
        </>
      </>
    );
  }

  handleStart() {
    const { currentInterval } = this.props;

    const timer = setInterval(
      () =>
        this.setState(({ currentTime }) => ({
          currentTime: currentTime + currentInterval
        })),
      currentInterval * 1000
    );
    this.setState({ interval: timer });
  }

  handleStop() {
    clearInterval(this.state.interval);
    this.setState({ currentTime: 0 });
  }
}

const enhance = connect(
  state => ({
    currentInterval: state.currentInterval
  }),
  () => null
);

export const Timer = enhance(TimerView);
