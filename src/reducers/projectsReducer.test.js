import { projectsReducer } from "./projectsReducer";
import * as actions from '../actions/index';
import { mockProjects } from '../thunks/mockData';

describe('projectsReducer', () => {

    it('should return the initial state', () => {
        const expected = []
        const result = projectsReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return all of the projects', () => {
        const initialState = []
        const expected = mockProjects;
        const result = projectsReducer(initialState, actions.addProject(expected))[0]
        expect(result).toEqual(expected)
    });
})

