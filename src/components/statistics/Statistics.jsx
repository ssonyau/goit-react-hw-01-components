import React from 'react';
import StatList from './StatList';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, data }) => {
  // console.log('title -',title,'data -',data);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {data.map(list => (
          <StatList
            key={list.id}
            label={list.label}
            percentage={list.percentage}
          />
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics;