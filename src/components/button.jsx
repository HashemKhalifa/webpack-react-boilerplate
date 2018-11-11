import React from 'react';
import PropTypes from 'prop-types';
import style from './button.css';

const SimonButton = ({ id, color, glow, onClick }) => (
  <div
    onClick={() => onClick(id)}
    className={`${style.normal} ${glow ? style.glow : ''} ${style[color]}`}
  />
);

SimonButton.propTypes = {
  id: PropTypes.number,
  color: PropTypes.string,
  glow: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SimonButton;
