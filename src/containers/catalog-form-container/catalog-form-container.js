import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { addNewItem } from '../../actions';

import CatalogForm from '../../components/catalog-form';

const propTypes = {
  onAddNewItem: PropTypes.func.isRequired,
  className: PropTypes.string
};

const defaultProps = {
  className: ''
};

const CatalogFormContainer = (props) => {
  const {
    onAddNewItem,
    className,
  } = props;

  return (
    <CatalogForm
      onSubmit={onAddNewItem}
      className={className}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  onAddNewItem: item => dispatch(addNewItem(item))
});

CatalogFormContainer.propTypes = propTypes;
CatalogFormContainer.defaultProps = defaultProps;
export default connect(null, mapDispatchToProps)(CatalogFormContainer);
