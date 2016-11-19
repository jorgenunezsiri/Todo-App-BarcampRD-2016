var React = require('react');
var TodoListItem = require('./TodoListItem');

var TodoList = function (props) {
  var items = props.items.map(function (item, index) {
    return (
      <TodoListItem
        handleRemove={props.handleRemove}
        key={index}>
          {item}
      </TodoListItem>
    );
  });

  return (
    <ul>
      {items}
    </ul>
  );
};

TodoList.propTypes = {
  handleRemove: React.PropTypes.func.isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
}

module.exports = TodoList;
