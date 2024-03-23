import { forwardRef, Ref, useImperativeHandle, useState } from "react";

export type CounterRef = {
  reset: () => void;
  checkSubscribed: (value: boolean) => void;
};

interface CounterProps {}

function Counter({}: CounterProps, ref: Ref<CounterRef>) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count + -1);
  };

  const reset = () => {
    setCount(0);
  };

  useImperativeHandle(ref, () => ({
    reset,
    checkSubscribed: (value) => console.log(value),
  }));

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default forwardRef(Counter);
