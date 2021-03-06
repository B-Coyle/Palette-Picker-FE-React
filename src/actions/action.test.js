import * as actions from "./index";
import { mockProject, mockPalettes } from "../utils/mockData";

describe("actions", () => {
  it("should return a type of HAS_ERROR with an error", () => {
    const message = "Has errored";
    const expected = {
      type: "HAS_ERROR",
      message
    };
    const result = actions.hasError(message);
    expect(result).toEqual(expected);
  });

  it("should return a type of SAVE_PROJECTS with all projects", () => {
    const projects = mockProject;
    const expected = {
      type: "SAVE_PROJECTS",
      projects
    };
    const result = actions.saveProjects(projects);
    expect(result).toEqual(expected);
  });

  it("should return a type of SAVE_PALETTE with all projects", () => {
    const palette = mockPalettes;
    const expected = {
      type: "SAVE_PALETTE",
      palette
    };
    const result = actions.savePalette(palette);
    expect(result).toEqual(expected);
  });

  it('should return a type of ADD_PALETTE with one new palette', () => {
    const newPalette = 'New Palette';
    const expected = {
      type: "ADD_PALETTE",
      newPalette
    };
    const result = actions.addPalette(newPalette);
    expect(result).toEqual(expected);
  });

  it('should return a type of ADD_PROJECT with a new project', () => {
    const newProject = 'New Project';
    const expected = {
      type: "ADD_PROJECT",
      newProject
    };
    const result = actions.addProject(newProject);
    expect(result).toEqual(expected);
  });


  it("should return a type of IS_LOADING with a boolean", () => {
    const isLoading = true;
    const expected = {
      type: "IS_LOADING",
      isLoading
    };
    const result = actions.isLoading(isLoading);
    expect(result).toEqual(expected);
  });

  it('should return a type of DELETE_PROJECT with an id', () => {
    const id = 1
    const expected = {
      type: 'DELETE_PROJECT',
      id
    }
    const result = actions.deleteProject(id)

    expect(result).toEqual(expected);
  });

  it('should return a type of DELETE_PALETTE with an id', () => {
    const id = 1
    const expected = {
      type: 'DELETE_PALETTE',
      id
    }
    const result = actions.deletePalette(id)

    expect(result).toEqual(expected);
  });

});
