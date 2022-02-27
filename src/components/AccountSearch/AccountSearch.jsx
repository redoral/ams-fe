import axios from 'axios';
import React from 'react';
import AccountSearchResultComponent from '../AccountSearchResult/AccountSearchResult';
import './AccountSearch.css';

// TODO: Search input state, button onClick, search results section
const AccountSearchComponent = () => {
	const [searchResult, setSearchResult] = React.useState({});
	const [searchValue, setSearchValue] = React.useState('');

	const findAccount = async () => {
		try {
			const res = await axios.get(
				`http://localhost:8080/api/v1/customers/pan/${searchValue}`
			);
			setSearchResult(res.data);
		} catch (e) {
			console.log(e);
			setSearchResult({});
		}
	};

	return (
		<div className='account-search-container'>
			<h1 className='search-text'>Search for an account</h1>
			<div className='search-bar'>
				<form style={{ display: 'flex', flex: 1 }}>
					<input
						type='text'
						className='search-bar-input'
						placeholder='Personal account number'
						value={searchValue}
						onChange={(ev) => setSearchValue(ev.target.value)}
					/>
					<span
						className='search-btn'
						value='Search'
						onClick={findAccount}
					>
						Search
					</span>
				</form>
			</div>
			<AccountSearchResultComponent searchResult={searchResult} />
		</div>
	);
};

export default AccountSearchComponent;
