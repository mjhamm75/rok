import React, { Component } from 'react';
import { Link } from 'react-router';
import bag from './../imgs/shopping-bag.png'
require('!style!css!sass!./../sass/nav.scss');

class Nav extends Component {
	render() {
		var fixedStyle = this.props.fixed ? {
			position: 'fixed',
			top: 0,
			width: '100%'
		} : null;
		return (
			<div className="navbar" style={fixedStyle}>
				<div>
					<a>Invisible</a>
				</div>
				<div>
					<Link to="/">The Roots of Knowledge Project</Link>
				</div>
				<div>
					<Link className="toggle" to="about">About the Project</Link>
				</div>
				<div>
					<Link className="toggle" to="donations">Donate</Link>
				</div>
				<div>
					<Link className="toggle" to="contact">Contact Us</Link>
				</div>
				<div>
					<div className="badge">1</div>
					<img className="bag" src={bag}/>
				</div>
			</div>
		)
	}
}

export default Nav;