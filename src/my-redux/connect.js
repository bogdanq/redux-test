import React from "react";
import { Context } from "./context";

export const connect = (
  mapStateToProps = () => null,
  mapDispatchToProps = () => null
) => (Wrapped) => {
  return function (props) {
    const store = React.useContext(Context);

    const [, forceRender] = React.useReducer((state) => state + 1, 0);

    React.useEffect(() => {
      store.subscribe(() => forceRender({}));
    }, []);

    return (
      <Wrapped
        {...props}
        {...mapDispatchToProps(store.dispatch, props)}
        {...mapStateToProps(store.getState(), props)}
      />
    );
  };
};
