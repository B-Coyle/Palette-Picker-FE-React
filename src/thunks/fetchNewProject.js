import { hasError, isLoading, addProject } from "../actions";

export const fetchNewProject = (name) => {
  return async dispatch => {
    const url = `https://palette-picker-jbbc.herokuapp.com/api/v1/projects`;
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ project_name: name })
    };
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, options);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const { id } = await response.json();
      dispatch(addProject({ project_name: name, id}));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(hasError(error.message));
    }
  };
};
