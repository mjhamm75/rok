import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEmailCreds } from './../actions/GlassActions';

class Config extends Component {
	render() {
		return (
			<div>
				<h2>Email Credentials</h2>
				<div>
					<div>
						<div>Username</div>
						<input ref="username"/>
					</div>
					<div>
						<div>Password</div>
						<input ref="password"/>
					</div>
					<div>
						<div>Password</div>
						<input ref="passwordValidation"/>
					</div>
					<a onClick={this.updateEmailCreds.bind(this)}>Update Creds</a>
				</div>
			</div>
		)
	}

	updateEmailCreds() {
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		var passwordValidation = this.refs.passwordValidation.value;
		if(password === passwordValidation) {
			this.props.dispatch(updateEmailCreds(username, password));			
		}
	}
}

function mapStateToProps(state) {
	return {

	}
}

export default connect(mapStateToProps)(Config);