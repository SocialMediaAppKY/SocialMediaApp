import {createContext} from 'react';

export const initialState = {
  selectedPost: '',
};

export default (Context = createContext(initialState));
