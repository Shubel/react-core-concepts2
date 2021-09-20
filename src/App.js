import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
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


function ExternalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}


function User(props) {
  return (
    <div className="product">
      <h2>name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default App;
