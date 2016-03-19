import React, { Component } from 'react';
import ImageMap from './ImageMap';

import zepto from 'npm-zepto';

import coords from './coords.js';
import b1 from './../imgs/b1.jpg'

require('!style!css!sass!./../sass/value-glass.scss');

export default class ValueGlass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paths: [],
			svg: "<div>Image will be here</div>"
		}
	}

	componentDidUpdate() {
		zepto('svg').on('mouseover', 'path', (e) => {
			
		})
	}

	render() {
		let paths = this.state.paths;
		let cost = this.renderCostDOM(paths);
		var glass = "glass";
		return (
			<div>
				<div className="button-container">
					<button onClick={this.highlight.bind(this)}>Highlight</button>
					<button onClick={this.clear.bind(this)}>Clear</button>
				</div>
				<div dangerouslySetInnerHTML={{__html: this.state.svg}}></div>
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

	renderCostDOM(paths) {
		return paths.map((coord, i) => {
			return (
				<div className="form" key={i} onMouseOver={this.mouseOver.bind(this, i)} onMouseOut={this.mouseOut.bind(this, i)}>
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
		
	}

	mouseOver(index) {
		zepto(`[id='${index}']`).addClass('hover');
	}

	mouseOut(index) {
		zepto(`[id='${index}']`).removeClass('hover');
	}

	addIdsToPaths(children) {
		for (var i = 0; i < children.length; ++i) {
			children[i].id = i;
		}
	}

	updateCoords() {
		var parser = new DOMParser();
		var html = parser.parseFromString(this.refs.coords.value, 'text/html');
		let children = html.body.children[0].children;
		this.addIdsToPaths(children);
		let childrenArr = [].slice.call(children)
		this.setState({
			svg: html.body.children[0].outerHTML,
			paths: childrenArr
		})
	}
}




