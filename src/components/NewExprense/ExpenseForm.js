import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // lesson 54. Working with Multiple States
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // lesson 55. Using One State Instead (And What's Better)
  // const [formData, setFormData] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  const titleChangedHandler = event => {
    // lesson 54. Working with Multiple States
    setTitle(event.target.value)

    // lesson 55. Using One State Instead (And What's Better)
    // setFormData({
    //   ...formData,
    //   title: event.target.value,
    // });

    // lesson 56. Updating State That Depends On The Previous State
    // setFormData((prevState) => {
    //   return { ...prevState, title: event.target.value }
    // });
  };
  const amountChangedHandler = event => {
    // lesson 54. Working with Multiple States
    setAmount(event.target.value)
    
    // lesson 55. Using One State Instead (And What's Better)
    // setFormData({
    //   ...formData,
    //   amount: event.target.value,
    // });
    
    // lesson 56. Updating State That Depends On The Previous State
    // setFormData((prevState) => {
    //   return { ...prevState, amount: event.target.value }
    // });
  };
  const dateChangedHandler = event => {
    // lesson 54. Working with Multiple States
    setDate(event.target.value)
    
    // lesson 55. Using One State Instead (And What's Better)
    // setFormData({
    //   ...formData,
    //   date: event.target.value,
    // });
    
    // lesson 56. Updating State That Depends On The Previous State
    // setFormData((prevState) => {
    //   return { ...prevState, date: event.target.value }
    // });
  };
  const clearForm = () => {
    setTitle('');
    setAmount('');
    setDate('');
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      title,
      amount: +amount,
      date: new Date(date),
    }

    props.onSaveData(formData);

    clearForm();
  };

  const resetHandler = (event) => {
    event.preventDefault();
    clearForm();
    props.onCloseForm();
  }

  return <form onSubmit={submitHandler} onReset={resetHandler} >
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input 
          type='text' 
          value={title}
          onChange={titleChangedHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input 
          type='number' 
          value={amount}
          min="0.01" 
          step="0.01" 
          onChange={amountChangedHandler} 
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input 
          type='date' 
          value={date}
          min="2019-01-01" 
          max="2022-12-31" 
          onChange={dateChangedHandler} 
        />
      </div>
    </div>
    <div className="new-expense__actions" >
      <button type='reset'>Close</button>
      <button type='submit'>Add Expense</button>
    </div>
  </form>
};

export default ExpenseForm;