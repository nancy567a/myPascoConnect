import React from 'react';

function ExpenseList() {
  const expenses = [
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Rent', amount: 900 }
  ];

  return (
    <ul className="expense-list">
      {expenses.map(expense => (
        <li key={expense.id} className="expense-list-item">
          {expense.description} - ${expense.amount}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
