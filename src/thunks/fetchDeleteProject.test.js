import { hasError, deleteProject, isLoading } from "../actions";
import { fetchDeleteProject } from "./fetchDeleteProject";

describe("fetchDeleteProject Thunk", () => {
  let mockDispatch;
  let mockUrl;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockUrl = "www.testing.com";
  });

  it("should call dispatch with isLoading(true) action", () => {
    const thunk = fetchDeleteProject(mockUrl, deleteProject, "DELETE");
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
    const thunk = fetchDeleteProject(mockUrl, deleteProject, "DELETE");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasError("Error has occurred"));
  });

  it.skip("should dispatch deleteProject", async () => {

    let mockProjects = [{ palette_name: "Cool Spring Water" }, {palette_name: 'Fresh Mountain Air'}]
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProjects),
        ok: true
      })
    );
    const thunk = fetchDeleteProject(mockUrl, deleteProject, "DELETE");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(deleteProject(mockProjects));
  });
});
