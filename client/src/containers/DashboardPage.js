import React, {Component} from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.js';

class DashboardPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			secretData: ''
		};
	}

	/*after initial rendering call the api*/
	componentDidMount() {
		const xhr = new XMLHttpRequest();
		xhr.open('get', '/api/dashboard');
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		// set the authorization HTTP header
		 xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
		 xhr.responseType = 'json';

		xhr.addEventListener('load', () => {
			if (xhr.status === 200) {
				this.setState({
					secretData: xhr.response.message
				});
			}
		});
		xhr.send();
	}


	// render
	render(){
		return(<Dashboard secretData={this.state.secretData} />);
	}
}

export default DashboardPage;
