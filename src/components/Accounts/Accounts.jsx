import React from 'react';

const AccountsComponent = (props) => {
    

    const fakeData = [{
        account_number: 12345,
        current_balance: 6969.00,
        customer_id: 1
    },
    {
        account_number: 54321,
        current_balance: 6969.00,
        customer_id: 1
    }];

    return <div className='accounts-container'>
        <h1 className='main-page-header'>Accounts</h1>
        {fakeData.map(account => {
            return <div className='account-item'>
                <span className='account-num-text'>xxxxxx{account.account_number}</span>
                <span className='balance-text'>${account.current_balance} current balance</span>

            </div>
        })}
    </div>
}

export default AccountsComponent;