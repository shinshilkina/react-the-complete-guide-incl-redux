import React, { useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from '../UI/Card';
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [ username, setUsername ] = useState('');
  const [ age, setAge ] = useState('');
  const [ error, setError ] = useState();
  const addUsernameHandler = (event) => {
    event.preventDefault();
    if (!username.trim().length || !age.trim().length) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(age, username);
    setAge('');
    setUsername('');
  }

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
      {
        error && <ErrorModal 
          title={error.title} 
          message={error.message} 
          onConfirm={errorHandler}
        />
      }
      <Card className={styles.input} >
        <form onSubmit={addUsernameHandler} >
          <label htmlFor="username">Username</label>
          <input 
            id="username" 
            type="text" 
            value={username}
            onChange={usernameChangeHandler}/>
          <label htmlFor="age">Age (years)</label>
          <input 
            id="age" 
            type="number" 
            min="0"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser;