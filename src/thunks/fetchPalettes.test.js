import { fetchPalettes } from "./fetchPalettes";
import * as actions from "../actions";
import { mockPalettes } from './mockData';

describe("addNewNote Thunk", () => {
  let mockDispatch;
  let mockPalettes;

  beforeEach(() => {
    mockDispatch = jest.fn();

    mockPalettes = 
    [
      {
        id: 1,
        palette_name: "Mountain Spring",
        color1: "Whit.skipe",
        color2: "Red",
        color3: "Blue",
        color4: "Green",
        color5: "Pink",
        project_id: 1
      },
      {
        id: 1,
        palette_name: "Mountain Fresh",
        color1: "Purple",
        color2: "Silver",
        color3: "Forest Green",
        color4: "White",
        color5: "Blue",
        project_id: 1
      }
    ];
  });

  it.skip("should check if dispatch is called", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPalettes[0])
      })
    );
    const thunk = fetchPalettes(mockPalettes[0]);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.addPalette(mockPalettes[0]));
  });

});
