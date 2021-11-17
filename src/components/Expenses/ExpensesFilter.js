import React from "react";

import { MONTHS } from "../../tools/constants";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  let elementsByMonths = [];
  const onChangeYearHandler = (event) => {
    elementsByMonths = MONTHS.map((name) => {
      return {
        title: name,
        value: 0,
      };
    });
    const year = event.target.value;
    const elementsByYear = props.elements.filter(
      (element) =>
        element.date >= new Date(`${year}-01-01`) &&
        element.date <= new Date(`${year}-12-31`),
    );

    if (!elementsByYear.length) return props.onChangeFilter([]);

    elementsByYear.filter((element) => {
      const monthNumber = element.date.getMonth() + 1;
      elementsByMonths[monthNumber].value += element.amount;
      return element;
    });
    return props.onChangeFilter(elementsByMonths);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onChangeYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
