import DashboardScreen from './screens/Dashboard/Dashboard';
import LoginScreen from './screens/Login/Login';
import ManagerDashScreen from './screens/ManagerDash/ManagerDash';

function App() {
	if (sessionStorage.getItem('user')) {
		if (JSON.parse(sessionStorage.getItem('user')).role.name === 'Manager') {
			return (
				<div className='App'>
					<ManagerDashScreen />
				</div>
			);
		} else {
			return (
				<div className='App'>
					<DashboardScreen />
				</div>
			);
		}
	} else {
		return (
			<div className='App'>
				<LoginScreen />
			</div>
		);
	}
}

export default App;
