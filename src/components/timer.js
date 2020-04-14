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
      intervalId: null,
    };
  }

  componentDidUpdate(prevProps) {
    const intervalsAreDifferent =
      prevProps.currentInterval !== this.props.currentInterval;

    if (intervalsAreDifferent && this.state.intervalId) {
      this.handleStart();
    }
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

    this.handleStop();

    const timer = setInterval(
      () =>
        this.setState(({ currentTime }) => ({
          currentTime: currentTime + currentInterval,
        })),
      currentInterval * 1000
    );
    this.setState({ intervalId: timer });
  }

  handleStop() {
    this.setState((state) => {
      clearInterval(state.intervalId);
      return { currentTime: 0, intervalId: null };
    });
  }
}

const enhance = connect((state) => {
  return {
    currentInterval: state.currentInterval,
  };
});

export const Timer = enhance(TimerView);
