import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home/index';


class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
						<Route exact path="/login" component={Login} />
						<Route exact path="/home" component={Home} />
				
				</Router>
			</div>
		);
	}
}
export default App;