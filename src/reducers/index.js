import _cloneDeep from 'lodash/cloneDeep';

import {
  CLONE_LAST_BEFORE_FIRST,
  CLONE_FIRST_AFTER_LAST,
  REMOVE_FIRST,
  REMOVE_LAST,
  ADD_NEW_ITEM
} from '../constants/actionTypes';

import { data } from '../data.json';

const items = data.map((item, index) => ({ ...item, id: index + 1 }));

const initialState = {
  items,
  nextId: Math.max(...items.map(item => item.id)) + 1
};

export default (state = initialState, action) => {
  const cloneLastBeforeFirst = (items, nextId) => {
    if (!items.length) {
      console.error('Catalog: can\'t clone last item, array is empty');

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
      console.error('Catalog: can\'t clone first item, array is empty');

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
      if (!state.items.length) {
        console.error('Catalog: can\'t remove first item, array is empty');
      }

      return {
        ...state,
        items: state.items.slice(1)
      };

    case REMOVE_LAST:
      if (!state.items.length) {
        console.error('Catalog: can\'t remove last item, array is empty');
      }

      return {
        ...state,
        items: state.items.slice(0, -1)
      };

    case ADD_NEW_ITEM:
      return {
        ...state,
        items: state.items.concat({
          ...action.payload,
          id: state.nextId
        }),
        nextId: state.nextId + 1
      };

    default:
      return state;
  }
};
