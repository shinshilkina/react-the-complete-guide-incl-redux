import ExpenseItem from '../ExpenseItem/index';
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
  return <div className="expenses"> { expensesElements } </div>;
}

export default Expenses;