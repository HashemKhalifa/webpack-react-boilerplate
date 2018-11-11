import React from 'react';
import PropTypes from 'prop-types';
import style from './score.css';

const Score = ({ score, status, start }) => (
  <div className={style.text}>
    <div>{score}</div>
    <div onClick={() => start()} className={style.text}>{status}</div>
  </div>
);

Score.propTypes = {
  title: PropTypes.string,
};

export default Score;
