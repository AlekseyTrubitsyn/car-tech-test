import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';

const propTypes = {
  onListModeSelect: PropTypes.func.isRequired,
  onGridModeSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
  listMode: PropTypes.bool,
};

const defaultProps = {
  className: '',
  listMode: false
};

const CatalogHeader = (props) => {
  const {
    className,
    listMode,
    onListModeSelect,
    onGridModeSelect
  } = props;

  return (
    <div className={`${className} catalog-header`.trim()}>
      <h2 className="catalog-header__title">
        {'Список объектов'}
      </h2>
      <div className="catalog-header__mods catalog-header-mods">
        <button
          className={`btn ${listMode ? 'btn-primary' : 'btn-secondary'} btn-inline catalog-header-mods__button`}
          title="Переключить в режим списка"
          type="button"
          onClick={onListModeSelect}
        >
          <FontAwesomeIcon icon={faList} />
          <span className="visually-hidden">
            {'Список'}
          </span>
        </button>
        <button
          className={`btn ${listMode ? 'btn-secondary' : 'btn-primary'} btn-inline catalog-header-mods__button`}
          title="Переключить в режим сетки из карточек"
          type="button"
          onClick={onGridModeSelect}
        >
          <FontAwesomeIcon icon={faTh} />
          <span className="visually-hidden">
            {'Карточки'}
          </span>
        </button>
      </div>
    </div>
  );
};

CatalogHeader.propTypes = propTypes;
CatalogHeader.defaultProps = defaultProps;
export default CatalogHeader;
