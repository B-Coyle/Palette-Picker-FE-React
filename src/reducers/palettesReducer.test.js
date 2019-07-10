import { palettesReducer } from "./palettesReducer";
import * as actions from '../actions/index';
import { mockPalettes } from '../thunks/mockData';

describe('paletteReducer' , () => {
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

    it('should add a new palette', () => {
        const initialState = [{ color1: 'white'}]
        const addedPalette = { color1: 'pink'}
        const expected = [{ color1: 'white'}, { color1: 'pink'}]

        const result = palettesReducer(initialState, actions.addPalette(addedPalette))
        expect(result).toEqual(expected)
    });

})