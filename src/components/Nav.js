import React, { Component } from 'react';
import { Link } from 'react-router';
import bag from './../imgs/shopping-bag.png'
require('!style!css!sass!./../sass/nav.scss');

class Nav extends Component {
	render() {
		return (
			<div className="navbar">
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
					<img className="bag" src={bag}/>
				</div>
			</div>
		)
	}
}

export default Nav;