import React from 'react';
import PropTypes from 'prop-types';
import style from './score.css';

const Score = ({ score, status, start }) => (
  <div className={style.text}>
    <div>{score}</div>
    <div onClick={() => start()} className={style.text}>
      {status}
    </div>
  </div>
);

Score.propTypes = {
  score: PropTypes.string,
  status: PropTypes.string,
  start: PropTypes.func,
};

export default Score;
