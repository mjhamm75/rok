import React, { Component } from 'react';
import { Link } from 'react-router';
import bag from './../imgs/shopping-bag.png'
import logo from './../imgs/rok-logo-white.png';
require('!style!css!sass!./../sass/nav.scss');

class Nav extends Component {
	render() {
		var fixedStyle = this.props.fixed ? {
			position: 'fixed',
			top: 0,
			width: '100%'
		} : null;

		var showLogo = !this.props.fixed ? {
			display: 'none'
		} : null;

		return (
			<div className="navbar" ref="navbar" style={fixedStyle}>
				<div />
				<div>
					<Link to="/">
						<div className="logo">
							<img style={showLogo} src={logo}/>
							<div>The Roots of Knowledge Project</div>
						</div>
					</Link>
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
					<img className="bag" src={bag}/>
				</div>
			</div>
		)
	}
}

export default Nav;