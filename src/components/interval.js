import React from "react";
import { connect } from "../my-redux/connect";
import { changeInterval } from "../actions";

class IntervalView extends React.Component {
  render() {
    const { currentInterval, changeInterval } = this.props;
    return (
      <>
        <span>Интервал обновления секундомера: {currentInterval} сек.</span>
        <span>
          <button onClick={() => changeInterval(-1)}>-</button>
          <button onClick={() => changeInterval(1)}>+</button>
        </span>
      </>
    );
  }
}

const enhance = connect(
  state => ({
    currentInterval: state.currentInterval
  }),
  dispatch => ({
    changeInterval: value => dispatch(changeInterval(value))
  })
);

export const Interval = enhance(IntervalView);
