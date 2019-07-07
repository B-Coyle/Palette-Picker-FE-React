export const hasError = (message) => ({ 
    type: 'HAS_ERROR',
    message
});


export const saveProjects = (projects) => ({
    type: 'SAVE_PROJECTS',
    projects
});

export const savePalette = (palette) => ({
    type:'SAVE_PALETTE',
    palette
})

export const saveColors = (colors) => ({
    type:'SAVE_COLORS',
    colors
});

export const addPalette = (newPalette) => ({
    type: 'ADD_PALETTE',
    newPalette
});

export const addProject = (newProject) => ({
    type:'ADD_PROJECT',
    newProject
});

export const isLoading = (boolean) => ({
    type: 'IS_LOADING',
    isLoading: boolean
})