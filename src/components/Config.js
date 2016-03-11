import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEmailCreds, createNewUser, checkUsername } from './../actions/GlassActions';
import className from 'classnames';
require('!style!css!sass!./../sass/config.scss');

class Config extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let emailError = className({
			error: this.state.emailError
		});
		let showEmailError = this.state.emailError ? {
			display: 'block'
		} : {
			display: 'none'
		}
		let userError = className({
			error: this.state.userError
		});
		let showUserError = this.state.userError ? {
			display: 'block'
		} : {
			display: 'none'
		}
		let usernameTaken = this.props.username ? {
			display: 'block'
		} : {
			display: 'none'
		}
		return (
			<div>
				<h2>Email Credentials</h2>
				<div className={emailError}>
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
					<div style={showEmailError}>Passwords are not the same</div>
					<a onClick={this.updateEmailCreds.bind(this)}>Update Creds</a>
				</div>
				<h2>Add User</h2>
					<div className={userError}>
						<div>
							<div>Username</div>
							<input ref="newuser" onBlur={this.checkUsername.bind(this)}/>
							<div style={usernameTaken}>Username is already taken</div>
						</div>
						<div>
							<div>Password</div>
							<input ref="newpassword"/>
						</div>
						<div>
							<div>Password</div>
							<input ref="newpasswordValidation"/>
						</div>
						<div style={showUserError}>Passwords are not the same</div>
						<a onClick={this.createUser.bind(this)}>Create User</a>
					</div>
			</div>
		)
	}

	checkUsername() {
		let username = this.refs.newuser.value;
		this.props.dispatch(checkUsername(username));
	}

	updateEmailCreds() {
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		var passwordValidation = this.refs.passwordValidation.value;
		if(!password || password === passwordValidation && this.props.username) {
			this.setState({
				emailError: false
			})
			this.props.dispatch(updateEmailCreds(username, password));			
			this.refs.username.value = '';
			this.refs.password.value = '';
			this.refs.passwordValidation.value = '';
		} else {
			this.setState({
				emailError: true
			})
		}
	}

	createUser() {
		var username = this.refs.newuser.value;
		var password = this.refs.newpassword.value;
		var passwordValidation = this.refs.newpasswordValidation.value;
		if(!password || password === passwordValidation) {
			this.setState({
				userError: true
			})
			this.props.dispatch(createNewUser(username, password));
		}
		this.setState({
				userError: false
		})
		this.refs.newuser.value = '';	
		this.refs.newpassword.value = '';
		this.refs.newpasswordValidation.value = '';
	}
}

function mapStateToProps(state) {
	return {
		username: state.username
	}
}

export default connect(mapStateToProps)(Config);