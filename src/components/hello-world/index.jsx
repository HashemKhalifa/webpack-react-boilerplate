import React from 'react';
import PropTypes from 'prop-types';
import './hello-world.css';

const HelloWorld = (props) => {
  return (
    <div className="hello-world">{props.title}</div>
  );

};
HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
