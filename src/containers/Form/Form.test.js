import React from "react";
import { Form } from "./Form";
import { shallow } from "enzyme";
import { mockProjects, mockPalettes } from "../../utils/mockData";

describe("Form", () => {
  let wrapper, instance;
  let mockFetchNewProject = jest.fn();
  let mockFetchNewPalette = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <Form
        projects={mockProjects}
        fetchNewProject={mockFetchNewProject}
        fetchNewPalette={mockFetchNewPalette}
        colors={['','','','','']}
      />
    );
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleChange", () => {
    it("should update state with the appropriate value", () => {
      expect(wrapper.state("projectName")).toEqual("");
      const mockEvent = {
        target: {
          id: "projectName",
          value: "My Project"
        }
      };
      instance.handleChange(mockEvent);
      expect(wrapper.state("projectName")).toEqual("My Project");
    });
  });

  describe("createProject", () => {
    it("should invoke fetchNewProject with the correct params", () => {
      const mockEvent = {
        target: {
          id: "projectName",
          value: "My Project"
        }
      };
      instance.handleChange(mockEvent);
      instance.createProject();
      expect(mockFetchNewProject).toHaveBeenCalled();
      expect(mockFetchNewProject).toHaveBeenCalledWith("My Project");
    });

    it("should reset the projectName property of state", () => {
      const mockEvent = {
        target: {
          id: "projectName",
          value: "My Project"
        }
      };
      instance.handleChange(mockEvent);
      expect(wrapper.state("projectName")).toEqual("My Project");
      instance.createProject();
      expect(wrapper.state("projectName")).toEqual("");
    });
  });

  describe("createPalette", () => {
    it("should invoke fetchNewPalette with the correct params", () => {
      const mockEvent = {
        target: {
          id: "paletteName",
          value: "My Palette"
        }
      };
      const mockNewPalette = {
        color1: "",
        color2: "",
        color3: "",
        color4: "",
        color5: "",
        palette_name: "My Palette",
        project_id: ""
      };
      instance.handleChange(mockEvent);
      instance.createPalette();
      expect(mockFetchNewPalette).toHaveBeenCalled();
      expect(mockFetchNewPalette).toHaveBeenCalledWith(mockNewPalette);
    });

    it("should reset the paletteName property of state", () => {
      const mockEvent = {
        target: {
          id: "paletteName",
          value: "My Palette"
        }
      };
      instance.handleChange(mockEvent);
      expect(wrapper.state("paletteName")).toEqual("My Palette");
      instance.createPalette();
      expect(wrapper.state("paletteName")).toEqual("");
    });
  });
});
