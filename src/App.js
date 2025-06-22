import { useState } from "react";
export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  return (
    <div>
      <p>Hello world!!</p>
      <button onClick={getAdvice}> Click</button>
      <Message advice={advice} count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <div>
      <p>{props.advice}</p>
      <p> Count = {props.count}</p>
    </div>
  );
}
