import { isLoadingReducer } from "./isLoadingReducer";
import * as actions from '../actions/index';

describe('isLoadingReducer' , () => {
    it('should return the initial state as default', () => {
        const expected = true
        const result = isLoadingReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should set loading with a string', () => {
        const expected = true
        const result = isLoadingReducer(undefined, actions.isLoading(true))
        expect(result).toEqual(expected)
    })
})