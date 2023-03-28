import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const StatList = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};
StatList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatList;