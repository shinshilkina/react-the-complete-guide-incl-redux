import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  
  const submitShowFormHandler = event => {
    event.preventDefault();
    setShowForm(true)
  }

  if (!showForm) {
    return <div className="new-expense">
      <button onClick={submitShowFormHandler}> Add New Expense </button>
    </div>
  }
  const saveDataHandler = (data) => {
    const exprenseData = {
      ...data,
      id: Math.random().toString(),
    }
    props.onAddExpense(exprenseData);
  };
  
  const closeFormHandler = () => {
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      <ExpenseForm 
        onSaveData={ saveDataHandler }
        onCloseForm={ closeFormHandler }  
      />
    </div>
  )
};

export default NewExpense;