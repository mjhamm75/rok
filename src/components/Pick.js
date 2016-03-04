import React, { Component } from 'react';
import ImageMap from './ImageMap';
import SkyLight from 'react-skylight';

import coords from './coords.js';
import b1 from './../imgs/b1.jpg'

require('!style!css!sass!./../sass/pick.scss');

class Pick extends Component {
	addPiece() {
		this.refs.simpleDialog.hide();
	}

	render() {
		var glass = "glass";
		return (
			<div>
				<h1>Pick</h1>
				<ImageMap source={b1} mappingName={glass} coords={coords} selectArea={this.selectArea.bind(this)}/>
				<button onClick={() => this.refs.simpleDialog.show()}>Open Modal</button>
				<SkyLight 
					ref="simpleDialog" 
					title="Tree of Knowledge"
					hideOnOverlayClicked>
		          	<a className="sky-button" onClick={this.addPiece.bind(this)}>Add Piece</a>
		        </SkyLight>
			</div>
		)
	}

	selectArea(id) {
		console.log(id);
	}
}

export default Pick;