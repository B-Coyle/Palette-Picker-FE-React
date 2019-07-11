import { hasError, isLoading, addPalette } from "../actions";

export const fetchNewPalette = palette => {
  return async dispatch => {
    const url = `https://palette-picker-jbbc.herokuapp.com/api/v1/palettes`;
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ ...palette })
    };
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, options);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const { id } = await response.json();
      dispatch(addPalette({ ...palette, id }));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(hasError(error.message));
    }
  };
};
