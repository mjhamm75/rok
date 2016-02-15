import React, { Component } from 'react';
import { Link } from 'react-router';

require('!style!css!sass!./../sass/nav.scss');

class Nav extends Component {
	render() {
		return (
			<div className="navbar">
				<div>
					<a>Invisible</a>
				</div>
				<div>
					<a href="/">The Roots of Knowledge Project</a>
				</div>
				<div>
					<a href="/about">About the Project</a>
				</div>
				<div>
					<a href="/donations">Donate</a>
				</div>
				<div>
					<a href="/contact">Contact Us</a>
				</div>
				<div>
					<a href="#">mailbox</a>
				</div>
			</div>
		)
	}
}

export default Nav;