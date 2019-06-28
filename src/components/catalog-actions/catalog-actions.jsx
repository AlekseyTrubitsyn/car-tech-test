import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  arrayIsEmpty: PropTypes.bool.isRequired,
  onCloneLastToFirst: PropTypes.func.isRequired,
  onCloneFirstToLast: PropTypes.func.isRequired,
  onRemoveFirst: PropTypes.func.isRequired,
  onRemoveLast: PropTypes.func.isRequired,
};

const CatalogActions = (props) => {
  const {
    className,
    arrayIsEmpty,
    onCloneLastToFirst,
    onCloneFirstToLast,
    onRemoveFirst,
    onRemoveLast
  } = props;

  const emptyArrayError = 'Действие недоступно для пустого списка. Создайте элемент на форме внизу страницы';

  return (
    <div className={`${className} catalog-actions`.trim()}>
      <button
        className="btn btn-primary btn-inline catalog-actions__button"
        title={`${arrayIsEmpty
          ? emptyArrayError
          : 'Скопировать последний элемент и вставить в начало списка'}
        `}
        type="button"
        disabled={arrayIsEmpty}
        onClick={onCloneLastToFirst}
      >
        {'Добавить в начало'}
      </button>
      <button
        className="btn btn-primary btn-inline catalog-actions__button"
        title={`${arrayIsEmpty
          ? emptyArrayError
          : 'Скопировать первый элемент и вставить в конец списка'
        }`}
        type="button"
        disabled={arrayIsEmpty}
        onClick={onCloneFirstToLast}
      >
        {'Добавить в конец'}
      </button>
      <button
        className="btn btn-primary btn-inline catalog-actions__button"
        title={`${arrayIsEmpty
          ? emptyArrayError
          : 'Удалить первый элемент'
        }`}
        type="button"
        disabled={arrayIsEmpty}
        onClick={onRemoveFirst}
      >
        {'Удалить первый'}
      </button>
      <button
        className="btn btn-primary btn-inline catalog-actions__button"
        title={`${arrayIsEmpty
          ? emptyArrayError
          : 'Удалить последний элемент'
        }`}
        type="button"
        disabled={arrayIsEmpty}
        onClick={onRemoveLast}
      >
        {'Удалить последний'}
      </button>
    </div>
  );
};

CatalogActions.propTypes = propTypes;
export default CatalogActions;
