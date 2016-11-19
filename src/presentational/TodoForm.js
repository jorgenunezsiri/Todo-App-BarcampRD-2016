var React = require('react');

var TodoForm = function (props) {
  return (
    <form onSubmit={props.handleSubmit}>
    	<input type='text' onChange={props.handleChange} value={props.item} />
    	<input type='submit' value='Add' />
    </form>
  );
};

TodoForm.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  item: React.PropTypes.string
};

module.exports = TodoForm;
