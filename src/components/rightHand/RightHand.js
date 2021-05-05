import React, { useEffect, useState } from "react";
//Components
import Loader from "../loader/Loader";
//Services
import TimeService from "../../services/homeService";
//Styles
import "./rightHand.scss";

export default function RightHand({ callMetrics, setCallMetrics, error }) {
  const [metrics, setMetrics] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMetrics();
  }, []);

  useEffect(() => {
    if (callMetrics) {
      getMetrics();
      setCallMetrics(false);
    }
  }, [callMetrics]);

  const getMetrics = async () => {
    setLoading(true);
    await TimeService.getMetrics().then((res) => {
      if(res.error === ''){
        setMetrics(res.data);
      } else if(res.error !== ''){
        error(true);
      }
      setLoading(false);
    });
  };
  return (
    <>
      <div className="metrics">
        {loading ? <Loader/> : <pre>{metrics}</pre>}
      </div>
    </>
  );
}
