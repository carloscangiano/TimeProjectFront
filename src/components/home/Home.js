import React, { useState } from "react";
//Components
import LeftHand from "../leftHand/LeftHand";
import RightHand from "../rightHand/RightHand";
import Error from '../error/Error';
//Styles
import './home.scss';

export default function Home() {
  const [callMetrics, setCallMetrics] = useState(false);
  const [error, setError] = useState(false)

  const setterMetric = (value) => {
    setCallMetrics(value);
  };
  return (
    <>
      <div className="container-total">
        {error ? <Error/> : (
        <div className="row ml-0">
          <div className="col-6 border-right">
            <LeftHand callMetrics={setterMetric} error={() => setError(true)}/>
          </div>
          <div className="col-6 metric-container">
            <RightHand
              callMetrics={callMetrics}
              setCallMetrics={setterMetric}
              error={() => setError(true)}
            />
          </div>
        </div>
        )}
      </div>
    </>
  );
}
