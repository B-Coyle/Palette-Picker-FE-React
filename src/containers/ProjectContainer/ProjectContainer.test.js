import React from "react";
import { ProjectContainer } from "./ProjectContainer";
import { shallow } from "enzyme";
import { mockProjects } from "../../utils/mockData";

describe("ProjectContainer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ProjectContainer projects={mockProjects} />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
