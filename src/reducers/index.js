import _cloneDeep from 'lodash/cloneDeep';

import {
  CLONE_LAST_BEFORE_FIRST
} from '../constants/actionTypes';

import { data } from '../data.json';

const initialState = {
  data,
  nextId: Math.max(...data.map(item => item.id)) + 1
};

export default (state = initialState, action) => {
  const cloneLastBeforeFirst = (items, nextId) => {
    if (!items.length) {
      return {
        items,
        nextId
      };
    }

    const itemToClone = items[items.length - 1];
    const clonedItem = {
      ..._cloneDeep(itemToClone),
      id: nextId
    };

    return {
      items: [clonedItem, ...items],
      nextId: nextId + 1
    };
  };

  switch (action.type) {
    case CLONE_LAST_BEFORE_FIRST:
      return {
        ...state,
        ...cloneLastBeforeFirst(state.items, state.nextId)
      };

    default:
      return state;
  }
};
