import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

require('!style!css!sass!./../sass/admin.scss');

export default class Admin extends Component {
	render() {
		return (
			<div className="admin">
				<div>
						<div className="flex">
							<div>
								<Link to="/admin/config">Config</Link>
								<Link to="/admin/create-paths">Create Paths</Link>
								<Link to="/admin/value-glass">Value Glass</Link>
							</div>
							{this.props.children}
						</div>
				</div>
			</div>
		)
	}
}
