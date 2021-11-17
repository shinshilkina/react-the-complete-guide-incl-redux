import React from "react";
import Chart from "../Chart/Chart";
import { MONTHS } from '../../tools/constants';

function ExpensesChart(props) {
  const chartDataPoints = MONTHS.map((name) => {
    return {
      title: name,
      value: 0,
    };
  });

  for (const expense of props.expenses) {
    const expenseMoths = expense.date.getMonth();
    chartDataPoints[expenseMoths].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;
