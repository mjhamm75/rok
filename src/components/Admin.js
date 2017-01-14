import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import s from './Admin.css';

export default class Admin extends Component {
	render() {
		return (
			<div className={s.admin}>
				<div>
						<div className={s.content}>
							<div className={s.buttons}>
								<Link className={s.button} to="/admin/config">Config</Link>
								<Link className={s.button} to="/admin/create-paths">Create Paths</Link>
								<Link className={s.button} to="/admin/value-glass">Value Glass</Link>
							</div>
							{this.props.children}
						</div>
				</div>
			</div>
		)
	}
}
