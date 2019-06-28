/* eslint-disable no-undef */
import {
  CLONE_LAST_BEFORE_FIRST,
  CLONE_FIRST_AFTER_LAST,
  REMOVE_FIRST,
  REMOVE_LAST,
  ADD_NEW_ITEM
} from '../constants/actionTypes';

import reducer from './index';

describe('Reducer tests', () => {
  const itemsCount = 4;
  const items = [...(new Array(itemsCount))].map((item, index) => ({ id: index + 1 }));
  const nextId = itemsCount + 1;

  describe('CLONE_LAST_BEFORE_FIRST', () => {
    it('Source state should be immutable', () => {
      const state = {
        items,
        nextId,
        immutable: true
      };

      const result = reducer(state, { type: CLONE_LAST_BEFORE_FIRST });
      state.immutable = false;

      expect(result.immutable).toBeTruthy();
    });

    it('Should not change items and nextId if the source array is empty', () => {
      const state = {
        items: [],
        nextId: 5
      };

      const result = reducer(state, { type: CLONE_LAST_BEFORE_FIRST });

      expect(Array.isArray(result.items) && !result.items.length).toBeTruthy();
      expect(result.nextId).toBe(5);
    });

    describe('Should clone the last item, push it at the beginning of the items array, and increment the nextId', () => {
      const magicNumbers = [1, 2, 3, 4, 5, 6, 7];

      const state = {
        items: items.map(item => ({ ...item, magicNumbers })),
        nextId
      };

      const result = reducer(state, { type: CLONE_LAST_BEFORE_FIRST });

      const clonedMagicNumbers = [...magicNumbers];
      magicNumbers.pop();

      const clonedItem = result.items[0];

      it('nextId should be incremented', () => {
        expect(result.nextId).toBe(nextId + 1);
      });

      it('Modified array should be greater than source', () => {
        expect(result.items.length).toBe(state.items.length + 1);
      });

      it('Cloned item should has a new id', () => {
        expect(clonedItem.id).not.toBe(state.items[state.items.length - 1].id);
      });

      it('Cloned item should be cloned deep', () => {
        expect(clonedItem.magicNumbers).not.toStrictEqual(magicNumbers);
      });

      it('Cloned item should be cloned deep from the last item', () => {
        expect(clonedItem).toStrictEqual({
          ...state.items[items.length - 1],
          id: nextId,
          magicNumbers: clonedMagicNumbers
        });
      });

      it('Source item should not be changed', () => {
        expect(result.items[result.items.length - 1]).toStrictEqual(state.items[state.items.length - 1]);
      });
    });
  });

  describe('CLONE_FIRST_AFTER_LAST', () => {
    it('Source state should be immutable', () => {
      const state = {
        items,
        nextId,
        immutable: true
      };

      const result = reducer(state, { type: CLONE_FIRST_AFTER_LAST });
      state.immutable = false;

      expect(result.immutable).toBeTruthy();
    });

    it('Should not change items and nextId if the source array is empty', () => {
      const state = {
        items: [],
        nextId: 5
      };

      const result = reducer(state, { type: CLONE_FIRST_AFTER_LAST });

      expect(Array.isArray(result.items) && !result.items.length).toBeTruthy();
      expect(result.nextId).toBe(5);
    });

    describe('Should clone the first item, push it to the end of the items array, and increment the nextId', () => {
      const magicNumbers = [1, 2, 3, 4, 5, 6, 7];

      const state = {
        items: items.map(item => ({ ...item, magicNumbers })),
        nextId
      };

      const result = reducer(state, { type: CLONE_FIRST_AFTER_LAST });

      const clonedMagicNumbers = [...magicNumbers];
      magicNumbers.pop();

      const clonedItem = result.items[result.items.length - 1];

      it('nextId should be incremented', () => {
        expect(result.nextId).toBe(nextId + 1);
      });

      it('Modified array should be greater than source', () => {
        expect(result.items.length).toBe(state.items.length + 1);
      });

      it('Cloned item should has a new id', () => {
        expect(clonedItem.id).not.toBe(state.items[0].id);
      });

      it('Cloned item should be cloned deep', () => {
        expect(clonedItem.magicNumbers).not.toStrictEqual(magicNumbers);
      });

      it('Cloned item should be cloned deep from the first item', () => {
        expect(clonedItem).toStrictEqual({
          ...state.items[0],
          id: nextId,
          magicNumbers: clonedMagicNumbers
        });
      });

      it('Source item should not be changed', () => {
        expect(result.items[0]).toStrictEqual(state.items[0]);
      });
    });
  });

  describe('REMOVE_FIRST', () => {
    const state = {
      items,
      nextId,
      immutable: true
    };

    const result = reducer(state, { type: REMOVE_FIRST });

    it('Should remove first item', () => {
      expect(result.items).toStrictEqual(state.items.slice(1));
    });

    it('Should not change nextId', () => {
      expect(result.nextId).toBe(state.nextId);
    });

    it('Source state should be immutable', () => {
      state.immutable = false;

      expect(result.immutable).toBeTruthy();
    });
  });

  describe('REMOVE_LAST', () => {
    const state = {
      items,
      nextId,
      immutable: true
    };

    const result = reducer(state, { type: REMOVE_LAST });

    it('Should remove last item', () => {
      expect(result.items).toStrictEqual(state.items.slice(0, -1));
    });

    it('Should not change nextId', () => {
      expect(result.nextId).toBe(state.nextId);
    });

    it('Source state should be immutable', () => {
      state.immutable = false;

      expect(result.immutable).toBeTruthy();
    });
  });

  describe('ADD_NEW_ITEM', () => {
    const state = {
      items,
      nextId,
      immutable: true
    };

    const newItem = {
      id: state.nextId,
      title: 'test',
      attributes: [
        'test 1.1',
        'test 1.2'
      ],
      description: 'test description'
    };

    const result = reducer(state, {
      type: ADD_NEW_ITEM,
      payload: newItem
    });

    it('Should add new item to the items array', () => {
      expect(result.items).toStrictEqual(state.items.concat(newItem));
    });

    it('Should increment nextId', () => {
      expect(result.nextId).toBe(state.nextId + 1);
    });

    it('Source items array should be immutable', () => {
      state.items = [];

      expect(result.items.length).not.toBe(0);
    });

    it('Source state should be immutable', () => {
      state.immutable = false;

      expect(result.immutable).toBeTruthy();
    });
  });
});
