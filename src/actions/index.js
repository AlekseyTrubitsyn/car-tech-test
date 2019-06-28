import * as types from '../constants/actionTypes';

export const cloneLastBeforeFirst = () => ({
  type: types.CLONE_LAST_BEFORE_FIRST
});

export const cloneFirstAfterLast = () => ({
  type: types.CLONE_FIRST_AFTER_LAST
});

export const removeFirst = () => ({
  type: types.REMOVE_FIRST
});

export const removeLast = () => ({
  type: types.REMOVE_LAST
});

export const addNewItem = payload => ({
  type: types.ADD_NEW_ITEM,
  payload
});
