import * as actions from "./index";
import { mockProject, mockPalettes } from "../thunks/mockData";

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

  it('should return a type of ADD_PALETTE WITH one new palette', () => {
    const newPalette = 'New Palette';
    const expected = {
      type: "ADD_PALETTE",
      newPalette
    };
    const result = actions.addPalette(newPalette);
    expect(result).toEqual(expected);
  })

  it("should return a type of IS_LOADING with a boolean", () => {
    const isLoading = true;
    const expected = {
      type: "IS_LOADING",
      isLoading
    };
    const result = actions.isLoading(isLoading);
    expect(result).toEqual(expected);
  });
});
