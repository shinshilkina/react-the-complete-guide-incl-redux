import { useState } from 'react';
import ExpenseItem from '../ExpenseItem/index';
import ExpensesFilter from '../ExpensesFilter';
import './index.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.elements.filter(element => 
    element.date.getFullYear().toString() === filteredYear  
  )

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length) {
    expensesContent = filteredExpenses.map(element => (
      <ExpenseItem 
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
      />
    ));
  }

  return <div className="expenses">
    <ExpensesFilter 
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
    />
    { expensesContent } 
  </div>;
}

export default Expenses;