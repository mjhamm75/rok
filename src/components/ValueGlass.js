import React, { Component } from 'react';
import ImageMap from './ImageMap';

// import coords from './coords.js';
import b1 from './../imgs/b1.jpg'

require('!style!css!sass!./../sass/value-glass.scss');

export default class ValueGlass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coords: []
		}
	}

	render() {
		let coords = this.state.coords;
		let cost = this.renderCostDOM(coords);
		var glass = "glass";
		return (
			<div>
				<div className="button-container">
					<button onClick={this.highlight.bind(this)}>Highlight</button>
					<button onClick={this.clear.bind(this)}>Clear</button>
				</div>
				<div className="image-container">
					<ImageMap ref="image" source={b1} mappingName={glass} coords={coords}/>
				</div>
				<div className="input-container">
					<div className="cost-container">
						{cost}
					</div>
					<div>
						<textarea ref="coords" placeholder="Enter coordinates here." onChange={this.updateCoords.bind(this)}></textarea>
					</div>
				</div>
			</div>
		)
	}

	renderCostDOM(coords) {
		return coords.map((coord, i) => {
			return (
				<div className="form" key={i} onMouseOver={this.mouseOver.bind(this, i)} onMouseOut={this.mouseOut.bind(this)}>
					<label>{i}</label>
					<div>
						<label>Amount</label>
						<input />
					</div>
				</div>
			)
		})
	}

	clear() {
		this.refs.image.clear();
	}

	highlight() {
		this.refs.image.highlightAll();
	}

	mouseOver(index, event) {
		let area = [].slice.call(this.refs.image.refs.map.children)[index];
		this.refs.image.highlightArea(area);
	}

	mouseOut() {
		this.refs.image.clear();
	}

	updateCoords() {
		var coords = this.refs.coords.value.split('\n');
		var coordsRemoveQuotes = coords.map(coord => {
			return coord.replace(/["']/g, "");
		});		
		this.setState({
			coords: coordsRemoveQuotes
		});
	}
}




