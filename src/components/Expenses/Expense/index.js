import { useState } from 'react';
import ExpensesChart from '../ExpensesChart';
import ExpensesFilter from '../ExpensesFilter';
import ExpensesList from '../ExpensesList';
import './index.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.elements.filter(element => 
    element.date.getFullYear().toString() === filteredYear  
  )

 

  return <div className="expenses">
    <ExpensesFilter 
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
    />
    <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList items={filteredExpenses}/>
  </div>;
}

export default Expenses;