import logo from './logo.svg';
import UserForm from './UserForm';
import UserDisplay from './UserDisplay';
import { useState, useEffect } from 'react';



function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("/users")
    .then(response => response.json())
    .then(data => setUser(data))   
  }, []);


  return (
    <div className="bg-black bg-cover">
      <h1 className="text-lime-400">Welcome</h1>
      <UserForm  setCount={setCount} count={count}/>
      <UserDisplay 
        setCount={setCount} 
        count={count} 
        user={user}
      />
    </div>
  );
}

export default App;
