import * as types from '../constants/actionTypes';

import { data } from '../data.json';

const initialState = {
  data,
  nextId: Math.max(...data.map(item => item.id)) + 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
