import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';
import { useState } from 'react';


const Expenses = ({items}) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;