import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import CatalogGrid, { catalogItemsPropTypes } from '../../components/catalog-grid';

const propTypes = {
  ...catalogItemsPropTypes,
  className: PropTypes.string,
  listMode: PropTypes.bool
};

const defaultProps = {
  className: '',
  listMode: false,
};

const CatalogGridContainer = (props) => {
  const {
    items,
    listMode,
    className,
  } = props;

  return (
    <CatalogGrid
      items={items}
      listMode={listMode}
      className={className}
    />
  );
};

const mapStateToProps = state => ({ items: state.items });

CatalogGridContainer.propTypes = propTypes;
CatalogGridContainer.defaultProps = defaultProps;
export default connect(mapStateToProps)(CatalogGridContainer);
