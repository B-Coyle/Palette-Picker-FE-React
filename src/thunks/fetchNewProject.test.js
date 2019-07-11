import { hasError, isLoading, addProject } from "../actions";

import { fetchNewProject } from "./fetchNewProject";

describe("fetchNewProjects Thunk", () => {
  let mockDispatch;
  let mockUrl;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockUrl = "www.testing.com";
  });

  it("should call dispatch with isLoading(true) action", () => {
    const thunk = fetchNewProject(mockUrl, addProject, "POST");
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
    const thunk = fetchNewProject(mockUrl, addProject, "DELETE");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasError("Error has occurred"));
  });

  it.skip("should dispatch addProject", async () => {
    let mockProject = [
      { palette_name: "Cool Spring Water" },
      { palette_name: "Fresh Mountain Air" }
    ];
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProject),
        ok: true
      })
    );
    const thunk = fetchNewProject(mockUrl, addProject, "POST");
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addProject(mockProject));
  });
});
