import React, { useState, useEffect } from "react";

const Timer = props => {
  const { pausedTime } = props;
  const [remainingTime, setRemainingTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const ret = Math.round((pausedTime - Date.now()) / 1000);
      setRemainingTime(ret);
    }, 1000);
  }, [pausedTime]);

  return <span>Going to sleep in {remainingTime} second(s)</span>;
};

export default Timer;
