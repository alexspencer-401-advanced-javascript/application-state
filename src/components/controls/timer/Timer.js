import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import store from '../../../store';
import styles from './Timer.css';

const Timer = ({ setRender }) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(seconds > 0) setSeconds(seconds => seconds - 1);
      if(seconds === 0) {
        clearTimeout(timeout);
        setRender(false);
        store.dispatch({
          type: 'SET_TO_ZERO',
          payload: 0
        });
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [seconds]);

  return (
    <header className={styles.Timer}>
      {seconds}
    </header>
  );
};

Timer.propTypes = {
  setRender: PropTypes.func.isRequired
};

export default Timer;
