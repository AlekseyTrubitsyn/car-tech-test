import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onListModeSelect: PropTypes.func.isRequired,
  onGridModeSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: ''
};

const CatalogHeader = (props) => {
  const {
    className,
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
          className="btn btn-primary btn-inline catalog-header-mods__button"
          title="Переключить в режим списка"
          type="button"
          onClick={onListModeSelect}
        >
          {'Список'}
        </button>
        <button
          className="btn btn-primary btn-inline catalog-header-mods__button"
          title="Переключить в режим сетки из карточек"
          type="button"
          onClick={onGridModeSelect}
        >
          {'Карточки'}
        </button>
      </div>
    </div>
  );
};

CatalogHeader.propTypes = propTypes;
CatalogHeader.defaultProps = defaultProps;
export default CatalogHeader;
