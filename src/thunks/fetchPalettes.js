import {hasError, savePalette, isLoading} from '../actions';


export const fetchPalettes = () => {
    return async(dispatch) => {
        const url = `https://palette-picker-jbbc.herokuapp.com/api/v1/palettes`;
        try {
            dispatch(isLoading(true))
            const response = await fetch(url)
            if(!response.ok) {
                throw Error (response.statusText)
            }
            const palettes = await response.json();
            dispatch(savePalette(palettes))
            dispatch(isLoading(false))
        } catch (error) {
            dispatch(hasError(error.message))
        }
    }
}