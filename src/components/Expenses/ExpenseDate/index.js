import './index.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleDateString('en-US', { month: 'long' });
  const day = props.date.toLocaleDateString('en-US', { month: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month"> { month } </div>
      <div className="expense-date__year"> { day } </div>
      <div className="expense-date__day"> { year } </div>
    </div>
  )
}

export default ExpenseDate;