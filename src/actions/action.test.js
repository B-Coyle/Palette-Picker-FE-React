import * as actions from './index';
import {mockProject, mockPalettes} from '../thunks/mockData';

describe('actions', () => {
    it('should return a type of HAS_ERROR with an error', () => {
        const message = 'Has errored';
        const expected = {
            type:'HAS_ERROR',
            message
        };
        const result = actions.hasError(message)
        expect(result).toEqual(expected)

    })
})