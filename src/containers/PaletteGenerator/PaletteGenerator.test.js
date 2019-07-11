import React from "react";
import { PaletteGenerator } from "./PaletteGenerator";
import { shallow } from "enzyme";
import { mockProjects } from "../../utils/mockData";

describe("PaletteGenerator", () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(<PaletteGenerator projects={mockProjects} />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("lockColor", () => {
    it("should update the locked colors in state", () => {
      expect(wrapper.state("locked")).toEqual([
        false,
        false,
        false,
        false,
        false
      ]);
      instance.lockColor(0);
      expect(wrapper.state("locked")).toEqual([
        true,
        false,
        false,
        false,
        false
      ]);
    });
  });

  describe("determineLock", () => {
    it("should return open string if the color is not locked", () => {
      let result = instance.determineLock(0);
      expect(result).toEqual("-open");
    });
    it("should return an empty string if the color is locked", () => {
      instance.lockColor(0);
      let result = instance.determineLock(0);
      expect(result).toEqual("");
    });
  });
});
