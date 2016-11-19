var React = require('react');

var TodoListItem = function (props) {
  return (
    <li>
      {props.children}
      <button type="button"
        onClick={props.handleRemove.bind(null, props.children)}>
          &times;
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  children: React.PropTypes.string.isRequired
};

module.exports = TodoListItem;
