import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { fetchProjects } from '../../thunks/fetchProjects';
import { fetchPalettes } from '../../thunks/fetchPalettes';
import { mockProjects } from '../../utils/mockData';
import * as actions from '../../actions';
import { isMainThread } from 'worker_threads';

jest.mock('../../thunks/fetchProjects')
jest.mock('../../thunks/fetchPalettes')


describe('app', () => { 
  let wrapper 
  let fetchProjectsMock = jest.fn()
  let fetchPalettesMock = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <App
        fetchPalettes={fetchPalettesMock}
        fetchProjects={fetchProjectsMock}
      />
    );
  });

  it('should render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when fetchProjects is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = fetchProjects();
      const mappedProperties = mapDispatchToProps(mockDispatch)
      mappedProperties.fetchProjects();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("should call dispatch when fetchPalettes is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchPalettes();
      const mappedProperties = mapDispatchToProps(mockDispatch);
      mappedProperties.fetchPalettes();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
