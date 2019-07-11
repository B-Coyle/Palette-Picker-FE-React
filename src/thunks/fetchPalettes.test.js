import { fetchPalettes } from "./fetchPalettes";
import {savePalette, isLoading} from "../actions/index";
import { mockPalettes } from './mockData';


describe("fetchPalettes Thunk", () => {
  let mockDispatch;
  let mockUrl 

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockUrl = 'www.testing.com'
  });

  it("should call dispatch with isLoading(true) action", () => {
    const thunk = fetchPalettes(mockUrl, savePalette, "GET");
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });


});
