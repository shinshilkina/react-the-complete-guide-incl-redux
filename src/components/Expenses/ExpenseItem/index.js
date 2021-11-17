import { useState } from 'react';

import Card from '../../UI/Cards';
import ExpenseDate from '../ExpenseDate/index';
import './index.css';

function ExpenseItem(props) {
  const [title] = useState(props.title);
  return (
    <Card className="expense-item">
      <ExpenseDate date={ props.date } />
      <div className="expense-item__description">
        <h2>{ title }</h2>
        <div className="expense-item__price">
          ${ props.amount }
        </div>
      </div>
    </Card>
  )
}

export default ExpenseItem;