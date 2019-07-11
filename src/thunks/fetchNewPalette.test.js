import { hasError, isLoading, addPalette } from "../actions";

import { fetchNewPalette } from "./fetchNewPalette";

describe("fetchNewPalettes Thunk", () => {
  let mockDispatch;
  let mockUrl;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockUrl = "www.testing.com";
  });

  it("should call dispatch with isLoading(true) action", () => {
    const thunk = fetchNewPalette(mockUrl, addPalette, "POST");
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
    const thunk = fetchNewPalette(mockUrl, addPalette, "DELETE");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasError("Error has occurred"));
  });

  it.skip("should dispatch addPalette", async () => {

    let mockPalettes = [{ palette_name: "Cool Spring Water" }, {palette_name: 'Fresh Mountain Air'}]
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPalettes),
        ok: true
      })
    );
    const thunk = fetchNewPalette(mockUrl, addPalette, "POST");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(addPalette(mockPalettes));
  });
});

