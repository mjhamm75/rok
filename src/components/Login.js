import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './../actions/GlassActions';

require('!style!css!sass!./../sass/login.scss');

class Login extends Component {
	render() {
		return (
			<div className="login">
				<input ref="username" placeholder=" Username"/>
				<input ref="password" placeholder=" Password"/>
				<a onClick={this.submitLogin.bind(this)}>Login</a>
			</div>
		)
	}

	submitLogin() {
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		this.props.dispatch(login(username, password));
	}
}

function mapStateToProps(state) {
	return {

	}
}

export default connect(mapStateToProps)(Login);