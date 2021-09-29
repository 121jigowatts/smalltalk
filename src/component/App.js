import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import "./Button.css";

function App({ data }) {
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState("START");
  const intervalRef = useRef(null);

  function loop(item, nextIndex) {
    if (item.length === nextIndex) {
      return 0;
    } else {
      return nextIndex;
    }
  }

  const toggle = useCallback(() => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setIndex((c) => loop(data, c + 1));
      }, 80);

      setStatus("STOP");
    } else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;

      setStatus("START");
    }
  }, [data]);

  return (
    <div>
      <div className="container">
        <div>{data[index]}</div>
      </div>
      <button type="button" className="link-button" onClick={toggle}>
        {status}
      </button>
    </div>
  );
}

export default App;
