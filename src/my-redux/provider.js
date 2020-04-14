import React from "react";

import { Context } from "./context";

export function Provider(props) {
  return (
    <Context.Provider value={props.store}>
      {React.Children.only(props.children)}
    </Context.Provider>
  );
}
