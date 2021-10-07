import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, positiveFeedback }) => (
  <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total:{total}</p>
    <p>Positive feedback: {positiveFeedback}%</p>
  </div>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistic;
