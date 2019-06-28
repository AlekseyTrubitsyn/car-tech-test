import React, { Component } from 'react';


import { data } from './data.json';

import CatalogHeader from '../catalog-header';
import CatalogForm from '../catalog-form';
import CatalogGrid from '../catalog-grid';

const demoData = data.map(((item, index) => ({ ...item, id: index + 1 })));

import CatalogActionsContainer from '../../containers/catalog-actions-container';
class Catalog extends Component {
  state = {
    items: demoData,
    nextId: Math.max(...demoData.map(item => item.id)) + 1,
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

  handleAddNewItem = (newItem) => {
    const {
      items,
      nextId
    } = this.state;

    this.setState({
      items: items.concat({
        ...newItem,
        id: nextId
      }),
      nextId: nextId + 1
    });
  }

  render() {
    const {
      items,
      listMode
    } = this.state;

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
        <CatalogGrid
          className="catalog__grid"
          items={items}
          listMode={listMode}
        />
        <CatalogForm
          className="catalog__form"
          onSubmit={this.handleAddNewItem}
        />
      </div>
    );
  }
}

export default Catalog;
