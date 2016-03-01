import React, { Component } from 'react';
import ImageMap from './ImageMap';

import coords from './coords.js';
import b1 from './../imgs/b1.jpg'

class Pick extends Component {
	render() {
		var glass = "glass";
		return (
			<div>
				<h1>Pick</h1>
				<ImageMap source={b1} mappingName={glass} coords={coords}/>
			</div>
		)
	}
}

export default Pick;