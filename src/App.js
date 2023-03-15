import { useState, useEffect } from 'react'
import React from 'react'
import Form from './components/Form'
import Users from './components/Users';

function App() {

  // const [users, setUsers] = useState([]);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:5000/people');
      const data = await res.json();

      console.log(data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Database App</h1>
      <Form value="Register" type="text" entry="Register" inputBtn={handleRegister} />
      <Form value="Login" type="email" entry="Login" inputBtn={handleLogin} />
      <Users />
    </div>
  )
}

export default App