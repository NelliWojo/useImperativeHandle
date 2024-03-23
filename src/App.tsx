import { useRef } from "react";
import Counter, { CounterRef } from "./components/Counter";

function App() {
  const counterRef = useRef<CounterRef>(null);

  return (
    <>
      <Counter ref={counterRef} />
      <button onClick={() => counterRef.current?.reset()}>
        Reset from Parent
      </button>
      <button onClick={() => counterRef.current?.checkSubscribed(true)}>
        Check subscription
      </button>
    </>
  );
}

export default App;
