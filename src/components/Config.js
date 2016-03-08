import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEmailCreds, createNewUser } from './../actions/GlassActions';

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
				<h2>Add User</h2>
					<div>
						<div>Username</div>
						<input ref="newuser"/>
					</div>
					<div>
						<div>Password</div>
						<input ref="newpassword"/>
					</div>
					<div>
						<div>Password</div>
						<input ref="newpasswordValidation"/>
					</div>
					<a onClick={this.createUser.bind(this)}>Create User</a>
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
		this.refs.username.value = '';
		this.refs.password.value = '';
		this.refs.passwordValidation.value = '';
	}

	createUser() {
		var username = this.refs.newuser.value;
		var password = this.refs.newpassword.value;
		var passwordValidation = this.refs.newpasswordValidation.value;
		if(password === passwordValidation) {
			this.props.dispatch(createNewUser(username, password));
		}
		this.refs.newuser.value = '';	
		this.refs.newpassword.value = '';
		this.refs.newpasswordValidation.value = '';
	}
}

function mapStateToProps(state) {
	return {

	}
}

export default connect(mapStateToProps)(Config);