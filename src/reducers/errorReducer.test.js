import { errorReducer } from "./errorReducer";
import * as actions from '../actions/index';

describe('errorReducer' , () => {
    it('should return the default state', () => {
        const result = errorReducer(undefined, {})
        expect(result).toEqual('')
    });

    it('should return the error message', () => {
        const initialState = ''
        const expected = 'Error'
        const result = errorReducer(initialState, actions.hasError('Error'))
        expect(result).toEqual(expected)
    })
})

//removed error.error from error reducer -double check to make sure it didn't affect other areas