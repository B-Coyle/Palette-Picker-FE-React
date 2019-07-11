export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case "SAVE_PALETTE":
      return action.palette;
    case "ADD_PALETTE":
      return [...state, action.newPalette];
    case "DELETE_PALETTE":
      let deletedPalette = state.filter(palette => {
        return action.id !== palette.id;
      });
      return deletedPalette;
    default:
      return state;
  }
};
