export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case "SAVE_PROJECTS":
      return action.projects;
    case "ADD_PROJECT":
      return [...state, action.newProject];
    case "DELETE_PROJECT":
      let updatedProjects = state.filter(project => {
        return action.id !== project.id;
      });
      return updatedProjects;
    default:
      return state;
  }
};
