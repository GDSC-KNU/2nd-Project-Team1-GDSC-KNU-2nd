const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";
const RESET_STATE_COUNT = "RESET_STATE_COUNT";

export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload, // payload: payload 의 축약
  };
};

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};

export const resetStateCount = (payload) => ({
  type: RESET_STATE_COUNT,
  payload,
});

const initialState = {
  number: 0,
};

// 리듀서
const Counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case MINUS_NUMBER:
      return {
        number: state.number - action.payload,
      };
    case RESET_STATE_COUNT:
      return {
        ...state,
        number: 0,
      };
    default:
      return state;
  }
};

export default Counter;
