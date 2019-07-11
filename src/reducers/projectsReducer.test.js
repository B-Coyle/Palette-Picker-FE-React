import { projectsReducer } from "./projectsReducer";
import * as actions from '../actions/index';
import { mockProjects } from '../thunks/mockData';

describe('projectsReducer', () => {
    let mockState = []

    it('should return the initial state', () => {
        const expected = []
        const result = projectsReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should save a new project', () => {
        const action = actions.saveProjects(mockProjects);
        const result = projectsReducer(mockState, action)
        expect(result).toEqual(mockProjects)
    })

    it('should return all of the projects', () => {
        const initialState = []
        const expected = mockProjects;
        const result = projectsReducer(initialState, actions.addProject(expected))[0]
        expect(result).toEqual(expected)
    });

    it('should add a new project' , () => {
        const initialState = [{name: "Jacob is an amazing tester"}];
        const newPalette = {name: "Bridgett is also an amazing tester"};
        const expected = [{name: "Jacob is an amazing tester"},{name: "Bridgett is also an amazing tester"} ];
        const result = projectsReducer(initialState, actions.addProject(newPalette));
        expect(result).toEqual(expected);
    });
})

