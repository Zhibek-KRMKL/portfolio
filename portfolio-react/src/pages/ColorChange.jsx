import { useState, useContext, useEffect } from "react";
import { CounterContext } from "../context/CounterProvider";
import { Button } from "antd";

function ColorChange() {
  const [isGreen, setIsGreen] = useState(false);
  const { counter, increment, decrement } = useContext(CounterContext);

  return (
    <>
      <div className={isGreen ? "green-bg" : "pink-bg"}>
        <button onClick={() => setIsGreen(!isGreen)}>Change color</button>
      </div>
      <br />
      <div className="colorChange">
        <Button type="primary" onClick={increment}>
          Increment counter
        </Button>
        <Button type="primary" onClick={decrement}>
          Decrement counter
        </Button>
      </div>
      <div>
        <h1>{counter}</h1>
      </div>
    </>
  );
}

export default ColorChange;
