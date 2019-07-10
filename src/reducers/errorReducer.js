export const errorReducer = (state = '', action) => {
  switch (action.type) {
    case "HAS_ERROR":
        return action.message || action.error
    default:
        return state
  }
};