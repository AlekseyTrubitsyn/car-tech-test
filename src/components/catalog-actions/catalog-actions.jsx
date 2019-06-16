import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onCloneLastToFirst: PropTypes.func.isRequired,
  onCloneFirstToLast: PropTypes.func.isRequired,
  onRemoveFirst: PropTypes.func.isRequired,
  onRemoveLast: PropTypes.func.isRequired,
};

const CatalogHeader = (props) => {
  const {
    className,
    onCloneLastToFirst,
    onCloneFirstToLast,
    onRemoveFirst,
    onRemoveLast
  } = props;

  return (
    <div className={`${className} catalog-actions`.trim()}>
      <button
        className="btn btn-primary btn-inline catalog-actions__button"
        title="Скопировать последний элемент и вставить в начало списка"
        type="button"
        onClick={onCloneLastToFirst}
      >
        {'Добавить в начало'}
      </button>
      <button
        className="btn btn-primary btn-inline catalog-actions__button"
        title="Скопировать первый элемент и вставить в конец списка"
        type="button"
        onClick={onCloneFirstToLast}
      >
        {'Добавить в конец'}
      </button>
      <button
        className="btn btn-primary btn-inline catalog-actions__button"
        title="Удалить первый элемент"
        type="button"
        onClick={onRemoveFirst}
      >
        {'Удалить первый'}
      </button>
      <button
        className="btn btn-primary btn-inline catalog-actions__button"
        title="Удалить последний элемент"
        type="button"
        onClick={onRemoveLast}
      >
        {'Удалить последний'}
      </button>
    </div>
  );
};

CatalogHeader.propTypes = propTypes;
export default CatalogHeader;
