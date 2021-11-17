import { useState } from 'react';
import ExpenseItem from '../ExpenseItem/index';
import ExpensesFilter from '../ExpensesFilter';
import './index.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return <div className="expenses">
    <ExpensesFilter 
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
    />
    { props.elements.map(element => (
      <ExpenseItem 
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
      />
    )) } 
  </div>;
}

export default Expenses;