import React from 'react';
import PropTypes from 'prop-types';

import CatalogItem, { catalogItemPropTypes } from '../catalog-item';

export const catalogItemsPropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(
      catalogItemPropTypes
    ).isRequired
  ).isRequired,
};

const propTypes = {
  ...catalogItemsPropTypes,
  className: PropTypes.string,
  listMode: PropTypes.bool,
};

const defaultProps = {
  className: '',
  listMode: false,
};

const CatalogGrid = (props) => {
  const {
    className,
    listMode,
    items
  } = props;

  return (
    <div className={`${className} catalog-grid ${listMode ? 'catalog-grid_list-mode' : ''}`.trim()}>
      {items.map(item => (
        <div
          className="catalog-grid__item catalog-grid-item"
          key={item.id}
        >
          <CatalogItem
            {...item}
            className="catalog-grid-item__content"
            listMode={listMode}
          />
        </div>
      ))}
    </div>
  );
};

CatalogGrid.propTypes = propTypes;
CatalogGrid.defaultProps = defaultProps;
export default CatalogGrid;
