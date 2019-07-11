import { hasError, saveProjects, isLoading } from "../actions";
import { fetchProjects } from "./fetchProjects";
import * as actions from "../actions/index";

describe("fetchProjects Thunk", () => {
  let mockDispatch;
  let mockUrl;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockUrl = "www.testing.com";
  });

  it("should call dispatch with isLoading(true) action", () => {
    const thunk = fetchProjects(mockUrl, saveProjects, "GET");
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
    const thunk = fetchProjects(mockUrl, saveProjects, "GET");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasError("Error has occurred"));
  });

  it.skip("should dispatch isLoading is false when the response is ok", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true
      })
    );

    const thunk = fetchProjects(mockUrl, saveProjects, "GET");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it("should dispatch saveProject", async () => {
    let mockProject = { project_name: "Mountain Breeze" };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProject),
        ok: true
      })
    );

    const thunk = fetchProjects(mockUrl, saveProjects, "GET");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(saveProjects(mockProject));
  });
});
