import ExpenseItem from '../ExpenseItem/index';
import ExpensesFilter from '../ExpensesFilter';
import './index.css';

function Expenses(props) {
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

  const onChangeFilterHandler = data => {
    console.log('Changed filter! Data ', data);
  };

  return <div className="expenses">
    <ExpensesFilter 
      elements={ props.elements }
      onChangeFilter={ onChangeFilterHandler }
    />
    { expensesElements } 
  </div>;
}

export default Expenses;