import { useRef } from "react";
import Counter, { CounterRef } from "./components/Counter";
import TextInput, { TextInputRef } from "./components/TextInput";

function App() {
  const counterRef = useRef<CounterRef>(null);
  const inputRef = useRef<TextInputRef>(null);

  return (
    <>
      <Counter ref={counterRef} />
      <button onClick={() => counterRef.current?.reset()}>
        Reset from Parent
      </button>

      {/* <button onClick={() => counterRef.current?.checkSubscribed(true)}>
        Check subscription
      </button> */}

      <TextInput ref={inputRef} />
      <button onClick={() => inputRef.current?.reset()}>
        Reset from Parent
      </button>
    </>
  );
}

export default App;
