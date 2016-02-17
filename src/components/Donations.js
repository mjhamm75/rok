import React, { Component } from 'react';
import Nav from './Nav';
import Copywrite from './Copywrite';
import img from './../imgs/wall-exterior.png';
require('!style!css!sass!./../sass/donations.scss');

class Donations extends Component {
	render() {
		return (
			<div className="donations">
				<Nav />
				<Copywrite />
			</div>
		)
	}
}

export default Donations;