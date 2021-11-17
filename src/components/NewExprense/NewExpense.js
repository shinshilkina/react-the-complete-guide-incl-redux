import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  const onSaveDataHandler = (data) => {
    const exprenseData = {
      ...data,
      id: Math.random().toString(),
    }
    props.onAddExpense(exprenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={ onSaveDataHandler }/>
    </div>
  )
};

export default NewExpense;