import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrese = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  const handleIncrese = () => setCount(count + 1); 
  const handleDecrese = () => setCount(count - 1); 
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrese}>Increase:</button>
      <button onClick={handleDecrese}>Decrease:</button>
    </div>
  );
}

export default App;
