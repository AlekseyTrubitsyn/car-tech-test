import React from 'react';
import PropTypes from 'prop-types';

export const catalogItemPropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  attributes: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  description: PropTypes.string.isRequired,
};

const propsTypes = {
  ...catalogItemPropTypes,
  className: PropTypes.string,
  listMode: PropTypes.bool,
};

const defaultProps = {
  className: '',
  listMode: false
};

const CatalogGridItem = (props) => {
  const {
    id,
    title,
    attributes,
    description,
    className,
    listMode
  } = props;

  return (
    <div className={
      `${className} catalog-item
      ${listMode ? 'catalog-item_list-mode' : ''} `.trim()}
    >
      <h3 className={
        `catalog-item__header catalog-item-header
        ${listMode ? 'catalog-item-header_list-mode' : ''} `.trim()}
      >
        <span className="catalog-item-header__title">
          {title}
        </span>
        <span className="catalog-item-header__id">
          {id}
        </span>
      </h3>
      <ul className={
        `catalog-item__attributes catalog-item-attributes
        ${listMode ? 'catalog-item-attributes_list-mode' : ''}`.trim()}
      >
        {attributes.map(attribute => (
          <li
            className="catalog-item-attributes__attribute"
            key={Math.floor(Math.random() * 10e10)}
          >
            {attribute}
          </li>
        ))}
      </ul>
      <p className="catalog-item__description">
        {description}
      </p>
    </div>
  );
};

CatalogGridItem.propsTypes = propsTypes;
CatalogGridItem.defaultProps = defaultProps;
export default CatalogGridItem;
