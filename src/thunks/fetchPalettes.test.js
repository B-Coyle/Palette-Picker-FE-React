import { fetchPalettes } from "./fetchPalettes";
import {savePalette, isLoading, hasError} from "../actions/index";
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

  it("should dispatch hasError with a message if the response is not ok", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        statusText: "Error has occurred"
      })
    );
    const thunk = fetchPalettes(mockUrl, savePalette, "GET");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasError("Error has occurred"));
  });

  it("should dispatch savePalette", async () => {
    let mockPalettes = { palette_name: "Cool Spring Water" };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPalettes),
        ok: true
      })
    );

    const thunk = fetchPalettes(mockUrl, savePalette, "GET");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(savePalette(mockPalettes));
  });


});
