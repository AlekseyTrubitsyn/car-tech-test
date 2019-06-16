import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onSubmit: PropTypes.func.isRequired
};

class CatalogForm extends Component {
  state = {
    title: '',
    attributes: '',
    description: ''
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleAttributesChange = (e) => {
    this.setState({
      attributes: e.target.value
    });
  }

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;

    const {
      title,
      attributes,
      description
    } = this.state;

    if (title === '') return;

    onSubmit({
      title,
      attributes: attributes.split('\n'),
      description
    });

    this.setState({
      title: '',
      attributes: '',
      description: ''
    });
  }

  render() {
    const {
      title,
      attributes,
      description
    } = this.state;

    const fillsFilled = title !== '';

    return (
      <form
        className="catalog-form"
        action="#"
        onSubmit={fillsFilled ? this.handleSubmit : null}
      >
        <label
          className="catalog-form__label catalog-form-label"
          htmlFor="new-item-title-field"
        >
          <span className="catalog-form-label__text">
            {'Заголовок *'}
          </span>
          <input
            className="catalog-form__input catalog-form-label__field"
            id="new-item-title-field"
            type="text"
            placeholder="Заголовок. Обязательное поле"
            value={title}
            onChange={this.handleTitleChange}
          />
        </label>
        <label
          className="catalog-form__label catalog-form-label"
          htmlFor="new-item-attributes-field"
        >
          <span className="catalog-form-label__text">
            {'Добавить пункт'}
          </span>
          <textarea
            className="catalog-form__text-area catalog-form-label__field"
            rows="3"
            id="new-item-attributes-field"
            placeholder="Атрибуты разделяются переносом строки. Используйте Enter для перечисления нескольких"
            value={attributes}
            onChange={this.handleAttributesChange}
          />
        </label>
        <label
          className="catalog-form__label catalog-form-label"
          htmlFor="new-item-description-field"
        >
          <span className="catalog-form-label__text">
            {'Описание'}
          </span>
          <input
            className="catalog-form__input catalog-form-label__field"
            id="new-item-description-field"
            type="text"
            placeholder="Описание"
            value={description}
            onChange={this.handleDescriptionChange}
          />
        </label>
        <button
          className="btn btn-primary btn-inline catalog-form__button"
          title="Добавить новый объект в каталог"
          type="submit"
          disabled={!fillsFilled}
        >
          {'Добавить'}
        </button>
      </form>
    );
  }
}

CatalogForm.propTypes = propTypes;
export default CatalogForm;
