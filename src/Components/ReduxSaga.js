import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";

class ReduxSaga extends React.Component {
  render() {
    const { counter, loading, increment, decrement } = this.props;
    return (
      <div>
        <h1>Redux Saga</h1>
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
    increment: () => dispatch(actionCreator.incrementSaga(2)),
    decrement: () => dispatch(actionCreator.decrement(2))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSaga);
