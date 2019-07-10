import { palettesReducer } from "./palettesReducer";
import * as actions from '../actions/index';
import { mockPalettes } from '../thunks/mockData';

describe('errorReducer' , () => {
    it('should return the initial state', () => {
        const expected = []
        const result = palettesReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return all of the palettes', () => {
        const initialState = []
        const expected = mockPalettes;
        const result = palettesReducer(initialState, actions.addPalette(expected))[0]
        expect(result).toEqual(expected)
    });
})