import React, { useEffect, useState } from "react";
//Components
import Loader from "../loader/Loader";
//Services
import HomeService from "../../services/homeService";
//Styles
import "./leftHand.scss";

export default function LeftHand({ callMetrics, error }) {
  const [timeSV, setTimeSV] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timeComputer, setTimeComputer] = useState(0);
  const [differenceTime, setDifferenceTime] = useState("00:00:00");

  useEffect(() => {
    getTimeSV();
    getTimeComputer();
  }, []);

  useEffect(() => {
    const timeNow = setTimeout(() => setTimeComputer(getSecondsTime()), 1000);
    return () => {
      clearTimeout(timeNow);
    };
  });

  useEffect(() => {
    if (differenceTime && Number(differenceTime.substr(6, 8)) % 30 === 0) {
      callMetrics(true);
      getTimeSV();
    }
  }, [differenceTime]);

  useEffect(() => {
    if (timeComputer && timeSV) {
      const differenceSeconds = timeComputer - timeSV;
      differenceSeconds >= 0 &&
        setDifferenceTime(
          new Date(differenceSeconds * 1000).toISOString().substr(11, 8)
        );
    }
  }, [timeComputer, timeSV]);

  const getTimeSV = async () => {
    setLoading(true);
    await HomeService.getTimeSV().then((res) => {
      if(res.error === ''){
        setTimeSV(res.data.properties.epoch.value);
      } else if(res.error !== ''){
        error(true);
      }
      setLoading(false);
    });
  };

  const getTimeComputer = async () => {
    setTimeComputer(getSecondsTime());
  };

  const getSecondsTime = () => {
    return Math.floor(new Date().getTime() / 1000);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="time-container">
          <p>Server time in epoch seconds: <span>{timeSV}</span></p>
          <p>Computer time: <span>{timeComputer}</span></p>
          <p>Difference Time: <span>{differenceTime}</span></p>
        </div>
      )}
    </>
  );
}
