import {hasError, saveProject, isLoading} from '../actions';
import { fetchProjects } from './fetchProjects';
import * as actions from '../actions/index';

describe("fetchProjects Thunk", () => {
    let mockDispatch
    let mockUrl

    beforeEach(() => {
      mockDispatch = jest.fn();
      mockUrl = 'www.testing.com'
    });

    it('should call dispatch with isLoading(true) action', () => {
        const thunk = fetchProjects(mockUrl, saveProject, 'GET')
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
      });

    it('should dispatch hasError with a message if the response is not ok', async() => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok:false,
            statusText: 'Error has occurred'
        }));
        const thunk = fetchProjects(mockUrl, saveProject, 'GET');
        await thunk(mockDispatch);
        
        expect(mockDispatch).toHaveBeenCalledWith(hasError('Error has occurred'));

    })

  });
  