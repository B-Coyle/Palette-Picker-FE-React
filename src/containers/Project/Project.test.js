import React from "react";
import { Project, mapDispatchToProps } from "./Project";
import { shallow } from "enzyme";
import { mockProjects, mockPalettes } from "../../utils/mockData";
import { fetchDeleteProject } from "../../thunks/fetchDeleteProject";

jest.mock("../../thunks/fetchDeleteProject");

describe("Project", () => {
  let wrapper;
  let mockFetchDeleteProject = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Project
        project={mockProjects[0]}
        palettes={mockPalettes}
        fetchDeleteProject={mockFetchDeleteProject}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke fetchDetleteProject on click", () => {
    wrapper.find("button").simulate("click");
    expect(mockFetchDeleteProject).toHaveBeenCalled();
  });

  describe("MDTP", () => {
    it("should call dispatch when fetchDeleteProject is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchDeleteProject();
      const mappedProperties = mapDispatchToProps(mockDispatch);
      mappedProperties.fetchDeleteProject();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
