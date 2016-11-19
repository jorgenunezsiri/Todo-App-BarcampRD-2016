/*
 *  Aplicación de Todo simple que permite agregar y eliminar
 *  elementos únicos de una lista.
 *
 *  Realizado por: Jorge Núñez Siri - Noviembre 19, 2016
 *
 */


var React = require('react');
var TodoForm = require('./presentational/TodoForm');
var TodoList = require('./presentational/TodoList');
var TodoTitle = require('./presentational/TodoTitle');

var App = React.createClass({
  getInitialState: function () {
    return {
      item: '',
      items: []
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var newItem = this.state.item;

    if (!newItem) {
      return;
    }

    var allItems = this.state.items;
    if (allItems.indexOf(newItem) > -1) {
      return;
    }
    allItems = allItems.concat([newItem]);

    this.setState({
      items: allItems,
      item: ''
    });
  },

  handleChange: function (e) {
    this.setState({
      item: e.target.value
    });
  },

  handleRemove: function (itemToRemove) {
    var allItems = this.state.items.filter(function (item) {
      return (item !== itemToRemove);
    });

    this.setState({
      items: allItems,
    });
  },

  render: function () {
    return (
      <div>
        <TodoTitle />
        <TodoList
          items={this.state.items}
          handleRemove={this.handleRemove} />
        <TodoForm
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
      </div>
    );
  }
});

module.exports = App;
