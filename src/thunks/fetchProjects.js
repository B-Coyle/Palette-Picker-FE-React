import { hasError, saveProjects, isLoading } from '../actions';

export const fetchProjects = () => {
    return async(dispatch) => {
        const url = `https://palette-picker-jbbc.herokuapp.com/api/v1/projects`;
        try {
            dispatch(isLoading(true))
            const response = await fetch(url)
            if(!response.ok) {
                throw Error (response.statusText)
            }
            const projects = await response.json();
            dispatch(saveProjects(projects))
            dispatch(isLoading(false))
        } catch(error){
            dispatch(hasError(error.message))
        }
    }
}