import React from 'react';
import PropTypes from 'prop-types';
import style from './hello-world.css';

const HelloWorld = props => (
  <div className={style['hello-world']}>{props.title}</div>
);

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
