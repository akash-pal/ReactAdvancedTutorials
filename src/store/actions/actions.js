export function loading(val) {
  return { type: "LOADING", payload: val };
}

export function asyncIncrement(val) {
  return { type: "INCREMENT", payload: val };
}

export function incrementSaga(val) {
  return { type: "INCREMENT_SAGA", payload: val };
}

export function increment(val) {
  return function (dispatch) {
    dispatch(loading(true));
    setTimeout(() => dispatch(asyncIncrement(val)), 5000);
  };
}

export function decrement(val) {
  return { type: "DECREMENT", payload: val };
}
