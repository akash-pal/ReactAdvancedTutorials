const initialState = {
  counter: 0,
  loading: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload,
        loading: false
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.payload,
        loading: false
      };
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
