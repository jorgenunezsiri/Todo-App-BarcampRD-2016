var React = require('react');

var TodoTitle = function (props) {
  return (
    <h3>{props.title}</h3>
  );
};

TodoTitle.propTypes = {
  title: React.PropTypes.string
};

TodoTitle.defaultProps = {
  title: 'TO-DO'
};

module.exports = TodoTitle;
