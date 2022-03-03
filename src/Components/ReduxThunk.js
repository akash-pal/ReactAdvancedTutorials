import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";

class ReduxThunk extends React.Component {
  render() {
    const { counter, loading, increment, decrement } = this.props;
    return (
      <div>
        <h1>Redux Thunk</h1>
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
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(actionCreator.increment(1)),
    decrement: () => dispatch(actionCreator.decrement(1))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunk);
