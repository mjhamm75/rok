import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

require('!style!css!sass!./../sass/app.scss');

class About extends Component {
	render() {
		return (
			<div>
				<Nav />
			</div>
		)
	}
}

export default About;