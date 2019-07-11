import { hasError, deletePalette, isLoading, deleteProject } from "../actions";
import { fetchDeletePalette } from "./fetchDeletePalette";

describe("fetchDeletePalettes Thunk", () => {
  let mockDispatch;
  let mockUrl;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockUrl = "www.testing.com";
  });

  it("should call dispatch with isLoading(true) action", () => {
    const thunk = fetchDeletePalette(mockUrl, deletePalette, "DELETE");
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
    const thunk = fetchDeletePalette(mockUrl, deletePalette, "DELETE");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasError("Error has occurred"));
  });

  it("should dispatch deletePalette", async () => {

    let mockPalettes = [{id:21, palette_name: "Cool Spring Water" }, {id: 27, palette_name: 'Fresh Mountain Air'}]
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPalettes),
        ok: true
      })
    );
    const thunk = fetchDeletePalette(mockUrl, deletePalette, "DELETE");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(deletePalette(mockPalettes));
  });
});
