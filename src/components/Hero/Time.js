import React, { useState, useEffect } from "react";
import styles from "./Time.module.css";

const Time = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const time = date.toLocaleTimeString("en-US", {
    timeZone: "America/Toronto",
  });

  return <p className={styles.time}>Toronto &#8212; {time}</p>;
};

export default Time;
