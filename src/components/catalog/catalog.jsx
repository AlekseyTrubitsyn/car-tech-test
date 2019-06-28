import React, { Component } from 'react';

import CatalogHeader from '../catalog-header';


import CatalogActionsContainer from '../../containers/catalog-actions-container';
import CatalogGridContainer from '../../containers/catalog-grid-container';
import CatalogFormContainer from '../../containers/catalog-form-container';

class Catalog extends Component {
  state = {
    listMode: false
  };

  handleGridModeSelect = () => {
    const { listMode } = this.state;

    if (!listMode) return;

    this.setState({
      listMode: false
    });
  }

  handleListModeSelect = () => {
    const { listMode } = this.state;

    if (listMode) return;

    this.setState({
      listMode: true
    });
  }

  render() {
    const { listMode } = this.state;

    return (
      <div className="catalog">
        <CatalogActionsContainer
          className="catalog__actions"
        />
        <CatalogHeader
          className="catalog__header"
          listMode={listMode}
          onListModeSelect={this.handleListModeSelect}
          onGridModeSelect={this.handleGridModeSelect}
        />
        <CatalogGridContainer
          className="catalog__grid"
          listMode={listMode}
        />
        <CatalogFormContainer
          className="catalog__form"
        />
      </div>
    );
  }
}

export default Catalog;
