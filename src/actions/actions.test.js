/* eslint-disable no-undef */
import {
  CLONE_LAST_BEFORE_FIRST,
  CLONE_FIRST_AFTER_LAST,
  REMOVE_FIRST,
  REMOVE_LAST
} from '../constants/actionTypes';

import {
  cloneLastBeforeFirst,
  cloneFirstAfterLast,
  removeFirst,
  removeLast
} from './index';

describe('Actions tests', () => {
  it('cloneLastBeforeFirst: should return correct type', () => {
    expect(cloneLastBeforeFirst()).toEqual({
      type: CLONE_LAST_BEFORE_FIRST
    });
  });

  it('cloneLastBeforeFirst: should return correct type', () => {
    expect(cloneFirstAfterLast()).toEqual({
      type: CLONE_FIRST_AFTER_LAST
    });
  });

  it('removeFirst: should return correct type', () => {
    expect(removeFirst()).toEqual({
      type: REMOVE_FIRST
    });
  });

  it('removeLast: should return correct type', () => {
    expect(removeLast()).toEqual({
      type: REMOVE_LAST
    });
  });
});
