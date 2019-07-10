import { hasError, saveProjects, isLoading } from '../actions';

export const fetchProjects = () => {
    console.log('FETCH PROJECTS');
    console.log(process.env);
    return async(dispatch) => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/projects`;
        console.log(url);
        try {
            dispatch(isLoading(true))
            const response = await fetch(url)
            if(!response.ok) {
                throw Error (response.statusText)
            }
            const projects = await response.json();
            console.log(projects);
            dispatch(saveProjects(projects))
            dispatch(isLoading(false))
        } catch(error){
            dispatch(hasError(error.message))
        }
    }
}