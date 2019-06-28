import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../actions';

import CatalogActions from '../../components/catalog-actions';

const propTypes = {
  cloneLastBeforeFirst: PropTypes.func.isRequired,
  cloneFirstAfterLast: PropTypes.func.isRequired,
  removeFirst: PropTypes.func.isRequired,
  removeLast: PropTypes.func.isRequired,
  className: PropTypes.string
};

const defaultProps = {
  className: ''
};

const CatalogActionsContainer = (props) => {
  const {
    cloneLastBeforeFirst,
    cloneFirstAfterLast,
    removeFirst,
    removeLast,
    className,
  } = props;

  return (
    <CatalogActions
      onCloneLastToFirst={cloneLastBeforeFirst}
      onCloneFirstToLast={cloneFirstAfterLast}
      onRemoveFirst={removeFirst}
      onRemoveLast={removeLast}
      className={className}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    cloneLastBeforeFirst,
    cloneFirstAfterLast,
    removeFirst,
    removeLast,
  } = bindActionCreators(Actions, dispatch);

  return {
    cloneLastBeforeFirst,
    cloneFirstAfterLast,
    removeFirst,
    removeLast
  };
};

CatalogActionsContainer.propTypes = propTypes;
CatalogActionsContainer.defaultProps = defaultProps;
export default connect(null, mapDispatchToProps)(CatalogActionsContainer);
