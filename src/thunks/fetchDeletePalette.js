import { hasError, isLoading, deletePalette } from "../actions";

export const fetchDeletePalette = id => {
  return async dispatch => {
    const url = `https://palette-picker-jbbc.herokuapp.com/api/v1/palettes/${id}`;
    const options = {
      method: "DELETE"
    };
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, options);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(deletePalette(id));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(hasError(error.message));
    }
  };
};
