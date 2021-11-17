import { useState } from 'react';
import ExpenseItem from '../ExpenseItem/index';
import ExpensesFilter from '../ExpensesFilter';
import './index.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const expensesElements = props.elements.map(element => {
    if (!element.title || !element.amount || !element.date || !element.id) {
      return;
    }
    return (
      <ExpenseItem 
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
      />
    )
  })
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return <div className="expenses">
    <ExpensesFilter 
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
    />
    { expensesElements } 
  </div>;
}

export default Expenses;