import React from 'react';
import styles from '../Feedback/Feedback.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={styles.name}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
export default Section;
