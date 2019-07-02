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
});
