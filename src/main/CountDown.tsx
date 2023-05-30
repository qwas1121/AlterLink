import React, { useState, useEffect } from "react";

type TimeLeft = {
  days?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
};

const CountDown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-08-15T13:00:00") - +new Date();
    let timeLeft: TimeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="countdown">
      <div className="timeWrap font2">
        <p className="time">
          {timeLeft.days}
          <span>Days</span>
        </p>
        <p className="colon">:</p>
        <p className="time">
          {timeLeft.hours}
          <span>Hours</span>
        </p>
        <p className="colon">:</p>
        <p className="time">
          {timeLeft.minutes}
          <span>Minutes</span>
        </p>
        <p className="colon">:</p>
        <p className="time">
          {timeLeft.seconds}
          <span>Seconds</span>
        </p>
      </div>
      {timeLeft.days === "00" &&
        timeLeft.hours === "00" &&
        timeLeft.minutes === "00" &&
        timeLeft.seconds === "00" && <div className="countEnd">민팅하기!</div>}
    </div>
  );
};

export default CountDown;
