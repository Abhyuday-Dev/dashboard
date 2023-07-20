import React from 'react';
import "./Transactions.css"

const Transactions = () => {
  return (
    <div className='transaction-section'>
        <h2 className='heading'>Recent Transactions</h2>
        <div className="transaction-data">
            <p>2020-08-07</p>
            <h5>Withdrawal tranfer to Bank-XXX11</h5>
            <hr />
        </div>
        <div className="transaction-data">
            <p>2020-08-07</p>
            <h5>Withdrawal tranfer to Bank-XXX11</h5>
            <hr />
        </div>
        <div className="transaction-data">
            <p>2020-08-07</p>
            <h5>Withdrawal tranfer to Bank-XXX11</h5>
            <hr />
        </div>
    </div>
  )
}

export default Transactions