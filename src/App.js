import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [ users, setUsers ] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers((prevUsers) => {
      return [
        { 
          name, 
          age,
          id: Math.random().toFixed(2).toString(),
        }, 
        ...prevUsers
      ];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
