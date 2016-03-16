import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

require('!style!css!sass!./../sass/donations.scss');

class Donations extends Component {
	render() {
		return (
			<div>
				<Nav fixed="true" />
				<div className="donations">
					<div className="hero">
						<div>Explore the wall and find a piece of glass to sponsor.</div>
						<div>Enjoy the story along the way.</div>
						<Link to="glass">Select a piece of glass</Link>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Donations;