export const hasError = message => ({
  type: "HAS_ERROR",
  message
});

export const saveProjects = projects => ({
  type: "SAVE_PROJECTS",
  projects
});

export const savePalette = palette => ({
  type: "SAVE_PALETTE",
  palette
});

export const addPalette = newPalette => ({
  type: "ADD_PALETTE",
  newPalette
});

export const addProject = newProject => ({
  type: "ADD_PROJECT",
  newProject
});

export const isLoading = boolean => ({
  type: "IS_LOADING",
  isLoading: boolean
});

export const deleteProject = (id) => ({
  type:"DELETE_PROJECT",
  id
})

export const deletePalette = (id)=> ({
  type:"DELETE_PALETTE",
  id
})