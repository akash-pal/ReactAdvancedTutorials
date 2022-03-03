import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreator from "../store/actions/actions";

function ReduxHooks() {
  const counter = useSelector((state) => state.counter);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  /**
   * https://react-redux.js.org/api/hooks#recipe-useactions
   */
  const decrement = useCallback(() => dispatch(actionCreator.decrement(1)), [
    dispatch
  ]);

  function increment() {
    dispatch(actionCreator.increment(1));
  }

  return (
    <div>
      <h1>Redux Hooks</h1>
      {loading && <div>Loading</div>}
      <div>Counter: {counter}</div>
      {!loading && (
        <>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </>
      )}
    </div>
  );
}

export default ReduxHooks;
