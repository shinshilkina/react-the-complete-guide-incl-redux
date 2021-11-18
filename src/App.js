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
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </React.Fragment>
  );
}

export default App;
