import { fetchPalettes } from "./fetchPalettes";
import * as actions from "../actions";
import { mockPalettes } from './mockData';


describe("addNewNote Thunk", () => {
  let mockUrl 
  let mockDispatch;
  let mockPalettes;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockUrl = 'www.anybodyoutthere.com'
  });
});
