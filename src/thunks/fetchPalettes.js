import {hasError, savePalettes, isLoading} from '../actions';

export const fetchPalettes = () => {
    return async(dispatch) => {
        const url = ``;
        //need url here
        try {
            dispatch(isLoading(true))
            const response = await fetch(url)
            if(!response.ok) {
                throw Error (response.statusText)
            }
            const palettes = await response.json();
            dispatch(savePalettes(palettes))
            dispatch(isLoading(false))
        } catch (error) {
            dispatch(hasError(error.message))
        }
    }
}