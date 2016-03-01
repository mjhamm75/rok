import React, { Component } from 'react';

require('!style!css!sass!./../sass/login.scss');

export default class Login extends Component {
	render() {
		return (
			<div className="login">
				<input placeholder=" Username"/>
				<input placeholder=" Password"/>
				<a>Login</a>
			</div>
		)
	}
}