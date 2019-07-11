import { hasError, isLoading, deleteProject } from "../actions";

export const fetchDeleteProject = id => {
  return async dispatch => {
    const url = `https://palette-picker-jbbc.herokuapp.com/api/v1/projects/${id}`;
    const options = {
      method: "DELETE",
    };
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, options);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(deleteProject(id));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(hasError(error.message));
    }
  };
};
