import React, {useState} from 'react';
import Expenses from './components/Expenses/Expense/index';
import NewExpense from './components/NewExprense/NewExpense';
import { DEFAULT_EXPENSES } from './tools/constants';

function App() {
  const [expenses, setExpense] = useState(DEFAULT_EXPENSES);

  const addExprenseHandler = expense => {
    setExpense(prevExprenses => [expense, ...prevExprenses]);
  };

  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {elements: expenses})
  // );
  return (
    <div>
      <NewExpense onAddExpense={ addExprenseHandler }/>
      <Expenses elements={expenses}/>
    </div>
  );
}

export default App;
