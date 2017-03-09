import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveSVG } from './../actions/GlassActions';

import s from './CreatePaths.css';

class ValueGlass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paths: [],
			svg: "<div>Image will be here</div>"
		}
	}

	render() {
		let paths = this.state.paths;
		let cost = this.renderCostDOM(paths);
		var glass = "glass";
		return (
			<div>
				<div className={s.buttonContainer}>
					<button onClick={this.highlight.bind(this)}>Highlight</button>
					<button onClick={this.clear.bind(this)}>Clear</button>
				</div>
				<div
					className={s.svg}
					dangerouslySetInnerHTML={{__html: this.state.svg}}></div>
				<div className={s.inputContainer}>
					<div>
						<input
							className={s.input}
							ref="glassTitle"
							placeholder="Glass title"/>
						<div className={s.costContainer}>
							{cost}
						</div>
					</div>
					<div>
						<textarea
							className={s.textArea}
							onChange={this.updateCoords.bind(this)}
							placeholder="Enter coordinates here."
							ref="coords"
						></textarea>
					</div>
				</div>
				<button onClick={this.saveSVG.bind(this)}>Save Mapping</button>
				<br />
				<textarea className={s.svg} value={this.state.processedSvg}/>
			</div>
		)
	}

	saveSVG() {
		let svg = document.getElementsByTagName('svg') [0].outerHTML;
		let title = this.refs.glassTitle.value;
		let paths = this.preparePathsToSave(this.state.paths);
		this.setState({
			processedSvg: svg,
			paths
		})
		this.props.dispatch(saveSVG(title, paths));
	}

	preparePathsToSave(paths) {
		return paths.map(path => {
			return {
				id: path.id,
				amount: path.value
			}
		});
	}

	updateAmount(id, event) {
		var path = document.querySelectorAll(`[id='${id}']`)[0];
		path.setAttribute('value', event.target.value);
		this.state.paths[id].value = event.target.value;
	}

	renderCostDOM(paths) {
		return paths.map((coord, i) => {
			return (
				<div className={s.form} key={i} onMouseOver={this.mouseOver.bind(this, i)} onMouseOut={this.mouseOut.bind(this, i)}>
					<label className={s.label}>{i + 1}</label>
					<div>
						<label className={s.label}>Amount</label>
						<input onChange={this.updateAmount.bind(this, i)}/>
					</div>
				</div>
			)
		})
	}

	clear() {
		let pathsWithId = document.querySelectorAll('[id]');
		for(let i = 0; i < pathsWithId.length; i++) {
			pathsWithId[i].setAttribute('class', '');
		}
	}

	highlight() {
		let pathWithId = document.querySelectorAll('[id]');
		for(let i = 0; i < pathWithId.length; i++) {
			pathWithId[i].setAttribute('class', s.hover);
		}
	}

	mouseOver(index) {
		var path = document.querySelectorAll(`[id='${index + 1}']`)[0];
		path.setAttribute('class', s.hover);
	}

	mouseOut(index) {
		var path = document.querySelectorAll(`[id='${index + 1}']`)[0];
		path.setAttribute('class', '');
	}

	addIdsToPaths(children) {
		for (var i = 0; i < children.length; ++i) {
			if(i > 0) {
				children[i].id = i;
			}
		}
	}

	updateCoords() {
		var parser = new DOMParser();
		var html = parser.parseFromString(this.refs.coords.value, 'text/html');
		let children = html.body.children[0].children;
		this.addIdsToPaths(children);
		let childrenArr = [].slice.call(children);
		childrenArr.shift();
		this.setState({
			svg: html.body.children[0].outerHTML,
			paths: childrenArr
		})
	}
}

export default connect()(ValueGlass);
