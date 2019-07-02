/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import CatalogForm from './catalog-form';

describe('CatalogForm', () => {
  const TITLE_FIELD_SELECTOR = '#new-item-title-field';
  const ATTRIBUTES_FIELD_SELECTOR = '#new-item-attributes-field';
  const DESCRIPTION_FIELD_SELECTOR = '#new-item-description-field';
  const SUBMIT_BUTTON_SELECTOR = '#catalog-form-submit-button';

  const mockSubmit = jest.fn();

  const props = { onSubmit: mockSubmit };

  const catalogForm = shallow(<CatalogForm {...props} />);

  const titleField = catalogForm.find(TITLE_FIELD_SELECTOR);
  const attributesField = catalogForm.find(ATTRIBUTES_FIELD_SELECTOR);
  const descriptionField = catalogForm.find(DESCRIPTION_FIELD_SELECTOR);
  const submitButton = catalogForm.find(SUBMIT_BUTTON_SELECTOR);

  const initialState = {
    title: '',
    attributes: '',
    description: ''
  };

  describe('initial render', () => {
    it('renders properly', () => {
      expect(catalogForm).toMatchSnapshot();

      expect(titleField).toHaveLength(1);
      expect(attributesField).toHaveLength(1);
      expect(descriptionField).toHaveLength(1);
      expect(submitButton).toHaveLength(1);
    });

    it('has correct initial state', () => {
      expect(catalogForm.state()).toStrictEqual(initialState);
    });

    it('title field renders properly', () => {
      const {
        className,
        value,
        placeholder,
        type
      } = titleField.props();

      expect(className).toContain('catalog-form');
      expect(value).toBe(initialState.title);
      expect(placeholder).toBeTruthy();
      expect(type).toBe('text');
    });

    it('attributes field renders properly', () => {
      const {
        className,
        value,
        placeholder
      } = attributesField.props();

      expect(className).toContain('catalog-form');
      expect(value).toBe(initialState.attributes);
      expect(placeholder).toBeTruthy();
    });

    it('attributes field supports multiline', () => {
      expect(attributesField.name()).toBe('textarea');
    });

    it('description field renders properly', () => {
      const {
        className,
        value,
        placeholder,
        type
      } = descriptionField.props();

      expect(className).toContain('catalog-form');
      expect(value).toBe(initialState.description);
      expect(placeholder).toBeTruthy();
      expect(type).toBe('text');
    });

    it('submit button renders properly', () => {
      const {
        className,
        title,
        disabled,
        type
      } = submitButton.props();

      expect(className).toContain('catalog-form');
      expect(title).not.toBe('');
      expect(type).toBe('submit');

      expect(disabled).toBeTruthy();

      expect(submitButton.text()).toContain('Добавить');
    });

    it('form submit disabled', () => {
      catalogForm.simulate('submit', { preventDefault: () => {} });
      expect(mockSubmit).not.toHaveBeenCalled();
    });
  });

  describe('fields should change state', () => {
    beforeAll(() => {
      catalogForm.setState(initialState);
    });

    const value = 'test';

    it('title field should change title prop in the state', () => {
      titleField.simulate('change', {
        target: {
          value
        }
      });

      const nextState = catalogForm.state();

      expect(nextState.title).toBe(value);
      expect(nextState.attributes).toBe(initialState.attributes);
      expect(nextState.description).toBe(initialState.description);
    });

    it('attributes field should change attributes prop in the state', () => {
      attributesField.simulate('change', {
        target: {
          value
        }
      });

      const nextState = catalogForm.state();

      expect(nextState.attributes).toBe(value);
      expect(nextState.title).toBe(initialState.title);
      expect(nextState.description).toBe(initialState.description);
    });

    it('attributes field value may be multiline', () => {
      const multilineValue = [...(new Array(10))].map(() => value).join('\n');

      attributesField.simulate('change', {
        target: {
          value: multilineValue
        }
      });

      const nextState = catalogForm.state();

      expect(nextState.attributes).toBe(multilineValue);
      expect(nextState.title).toBe(initialState.title);
      expect(nextState.description).toBe(initialState.description);
    });

    it('description field should change description prop in the state', () => {
      descriptionField.simulate('change', {
        target: {
          value
        }
      });

      const nextState = catalogForm.state();

      expect(nextState.description).toBe(value);
      expect(nextState.title).toBe(initialState.title);
      expect(nextState.attributes).toBe(initialState.attributes);
    });

    afterEach(() => {
      catalogForm.setState(initialState);
    });
  });

  describe('form submit', () => {
    beforeAll(() => {
      catalogForm.setState(initialState);
    });

    it('submit button should be disabled if the title is empty', () => {
      catalogForm.setState({ title: '' });

      const updatedSubmitButton = catalogForm.find(SUBMIT_BUTTON_SELECTOR);

      expect(updatedSubmitButton.props().disabled).toBeTruthy();
    });

    it('submit button should be enabled if the title is not empty', () => {
      catalogForm.setState({ title: 'test' });

      const updatedSubmitButton = catalogForm.find(SUBMIT_BUTTON_SELECTOR);

      expect(updatedSubmitButton.props().disabled).toBeFalsy();
    });

    it('form node onSubmit callback is null if the title is empty', () => {
      catalogForm.setState({ title: '' });

      expect(catalogForm.props().onSubmit).toBeFalsy();
    });

    it('form node onSubmit callback is function if the title is not empty', () => {
      catalogForm.setState({ title: 'test' });

      expect(typeof catalogForm.props().onSubmit).toBe('function');
    });

    it('component should call prop function onSubmit with correct data on form submit', () => {
      const attributes = 'test attributes 1\ntest attributes 2\ntest attributes 3';

      const dataToSubmit = {
        title: 'test title',
        attributes,
        description: 'test description',
      };

      catalogForm.setState(dataToSubmit);

      catalogForm.simulate('submit', { preventDefault: () => {} });

      expect(mockSubmit).toHaveBeenCalledWith({ ...dataToSubmit, attributes: attributes.split('\n') });
    });

    afterEach(() => {
      catalogForm.setState(initialState);
    });
  });
});
