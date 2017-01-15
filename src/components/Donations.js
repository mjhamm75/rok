import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

import s from './Donation.css';

class Donations extends Component {
	render() {
		return (
			<div>
				<Nav fixed="true" />
				<div className={s.donations}>
					<div className={s.hero}>
						<div className={s.header}>Explore the wall and find a piece of glass to sponsor.</div>
						<div className={s.blurb}>Enjoy the story along the way.</div>
						<Link
							className={s.button}
							to="glass">Select a piece of glass</Link>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Donations;
