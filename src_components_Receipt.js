import React from 'react';

function Receipt() {
  const totalExpenses = 950;

  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <div className="receipt-details">
        <div>
          <h3>Total Expenses</h3>
          <p>${totalExpenses}</p>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
