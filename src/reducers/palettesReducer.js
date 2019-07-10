export const palettesReducer = (state = [], action) => {
    switch (action.type) {
      case "SAVE_PALETTE":
        return action.palette;
      case "ADD_PALETTE":
          return [...state, action.newPalette];
      default:
          return state
    }
  };
  