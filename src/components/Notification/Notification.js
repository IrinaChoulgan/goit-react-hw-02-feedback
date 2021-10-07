import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Feedback/Feedback.module.css';

const Notification = ({ message }) => {
  return <div className={styles.notification}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
