import React from 'react';
import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

function ExpensesList(props) {

  if (!props.items.length) {
    return <p className="expenses-list__fallback">No expenses found.</p>
  }
  return <ul className="expenses-list">
    {
      props.items.map(element => (
        <ExpenseItem 
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))
    }
  </ul>
}

export default ExpensesList;
