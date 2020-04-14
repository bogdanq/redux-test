import React from "react";
import PropTypes from "prop-types";

export const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  class WrappedComponent extends React.Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
      this.context.store.subscribe(this.handleChange);
    }

    render() {
      return (
        <Component
          {...this.props}
          {...mapDispatchToProps(this.context.store.dispatch, this.props)}
          {...mapStateToProps(this.context.store.getState(), this.props)}
        />
      );
    }

    handleChange() {
      this.forceUpdate();
    }
  }

  WrappedComponent.contextTypes = {
    store: PropTypes.object
  };

  return WrappedComponent;
};
