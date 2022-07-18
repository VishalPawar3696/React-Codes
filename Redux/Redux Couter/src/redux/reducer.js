export const reducer = (currentState, action) => {
  // user / app logic
  if (action?.type === "INCREMENT_AMOUNT") {
    return {
      ...currentState,
      count: currentState.count + 1
    };
  } else if (action?.type === "DECREMENT_AMOUNT") {
    return {
      ...currentState,
      count: currentState.count - 1
    };
  } else {
    return currentState;
  }
};
