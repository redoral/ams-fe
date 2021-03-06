import React from 'react';
import AccountsComponent from '../Accounts/Accounts';
import ViewAccountComponent from '../ViewAccount/ViewAccount';
import AccountSearchComponent from '../AccountSearch/AccountSearch';

const DashboardMainPageComponent = (props) => {
	const [account, setAccount] = React.useState();

	switch (props.nav) {
		case 'accounts':
			return (
				<AccountsComponent
					setNav={props.setNav}
					setAccount={setAccount}
				/>
			);
		case 'viewAccount':
			return (
				<ViewAccountComponent setNav={props.setNav} account={account} />
			);
		case 'searchAccount':
			return <AccountSearchComponent />;
		default:
			return <AccountsComponent setNav={props.setNav} />;
	}
};

export default DashboardMainPageComponent;
