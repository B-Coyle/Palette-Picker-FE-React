import {hasError, deletePalette, isLoading} from '../actions';
import { fetchDeletePalette } from './fetchDeletePalette';

describe("fetchPalettes Thunk", () => {
    let mockDispatch;
    let mockUrl 
  
    beforeEach(() => {
      mockDispatch = jest.fn();
      mockUrl = 'www.testing.com'
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

});

