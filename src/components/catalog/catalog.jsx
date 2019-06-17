import React, { Component } from 'react';

import _cloneDeep from 'lodash/cloneDeep';

import { data } from './data.json';

import CatalogActions from '../catalog-actions';
import CatalogHeader from '../catalog-header';
import CatalogForm from '../catalog-form';
import CatalogGrid from '../catalog-grid';

const demoData = data.map(((item, index) => ({ ...item, id: index + 1 })));

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

  handleCloneLastToFirst = () => {
    const {
      items,
      nextId
    } = this.state;

    if (!items.length) {
      console.error('Catalog: can\'t clone last item, array is empty');

      return;
    }

    const itemToClone = items[items.length - 1];
    const clonedItem = {
      ..._cloneDeep(itemToClone),
      id: nextId
    };

    this.setState({
      items: [clonedItem, ...items],
      nextId: nextId + 1
    });
  }

  handleCloneFirstToLast = () => {
    const {
      items,
      nextId
    } = this.state;

    if (!items.length) {
      console.error('Catalog: can\'t clone first item, array is empty');

      return;
    }

    const itemToClone = items[0];
    const clonedItem = {
      ..._cloneDeep(itemToClone),
      id: nextId
    };

    this.setState({
      items: [...items, clonedItem],
      nextId: nextId + 1
    });
  }

  handleRemoveFirst = () => {
    const { items } = this.state;

    if (!items.length) {
      console.error('Catalog: can\'t remove first item, array is empty');

      return;
    }

    this.setState({
      items: items.slice(1)
    });
  }

  handleRemoveLast = () => {
    const { items } = this.state;

    if (!items.length) {
      console.error('Catalog: can\'t remove last item, array is empty');

      return;
    }

    this.setState({
      items: items.slice(0, -1)
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
        <CatalogActions
          className="catalog__actions"
          onCloneLastToFirst={this.handleCloneLastToFirst}
          onCloneFirstToLast={this.handleCloneFirstToLast}
          onRemoveFirst={this.handleRemoveFirst}
          onRemoveLast={this.handleRemoveLast}
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
