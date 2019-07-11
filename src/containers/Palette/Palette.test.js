import React from "react";
import { Palette, mapDispatchToProps } from "./Palette";
import { shallow } from "enzyme";
import { mockPalettes } from "../../utils/mockData";
import { fetchDeletePalette } from "../../thunks/fetchDeletePalette";

jest.mock("../../thunks/fetchDeletePalette");

describe("Palette", () => {
  let wrapper;
  let mockFetchDeletePalette = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <Palette
        data={mockPalettes[0]}
        fetchDeletePalette={mockFetchDeletePalette}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke fetchDeletePalette on click", () => {
    wrapper.find(".trash-btn").simulate("click");
    expect(mockFetchDeletePalette).toHaveBeenCalled();
  });

  describe("MDTP", () => {
    it("should call dispatch when fetchDeletePalette is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchDeletePalette();
      const mappedProperties = mapDispatchToProps(mockDispatch);
      mappedProperties.fetchDeletePalette();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
