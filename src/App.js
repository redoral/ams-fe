import { useSelector } from 'react-redux';
import DashboardScreen from './screens/Dashboard/Dashboard';
import LoginScreen from './screens/Login/Login';

function App() {
	if (sessionStorage.getItem('user')) {
		return (
			<div className='App'>
				<DashboardScreen />
			</div>
		);
	} else {
		return (
			<div className='App'>
				<LoginScreen />
			</div>
		);
	}
}

export default App;
