import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

require('!style!css!sass!./../sass/admin.scss');

export default class Admin extends Component {
	render() {
		return (
			<div className="admin">
				<Link to="/admin/config">Config</Link>
				<Link to="/admin/value-glass">Value Glass</Link>
				{this.props.children}
			</div>
		)
	}
}