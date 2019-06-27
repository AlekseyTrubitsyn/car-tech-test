import _cloneDeep from 'lodash/cloneDeep';

import {
  CLONE_LAST_BEFORE_FIRST,
  CLONE_FIRST_AFTER_LAST,
  REMOVE_FIRST,
  REMOVE_LAST
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

  const cloneFirstAfterLast = (items, nextId) => {
    if (!items.length) {
      return {
        items,
        nextId
      };
    }

    const itemToClone = items[0];
    const clonedItem = {
      ..._cloneDeep(itemToClone),
      id: nextId
    };

    return {
      items: [...items, clonedItem],
      nextId: nextId + 1
    };
  };


  switch (action.type) {
    case CLONE_LAST_BEFORE_FIRST:
      return {
        ...state,
        ...cloneLastBeforeFirst(state.items, state.nextId)
      };

    case CLONE_FIRST_AFTER_LAST:
      return {
        ...state,
        ...cloneFirstAfterLast(state.items, state.nextId)
      };

    case REMOVE_FIRST:
      return {
        ...state,
        items: state.items.slice(1)
      };

    case REMOVE_LAST:
      return {
        ...state,
        items: state.items.slice(0, -1)
      };

    default:
      return state;
  }
};
