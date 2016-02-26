import React, { Component } from 'react';
import classNames from 'classnames';

require('!style!css!sass!./../sass/overlay.scss');

export default class Overlay extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showOverlay: props.showOverlay,
			src: props.src
		}
	}

	componentWillReceiveProps(props) {
		this.setState({
			showOverlay: props.showOverlay,
			src: props.src
		})
	}

	render() {
		let style = classNames(
			'overlay',
			'overlay-scale',
			{
				'open': this.state.showOverlay
			}
		)

		return (
			<div className={style}>
				<button type="button" className="overlay-close" onClick={() => this.setState({showOverlay: false})}>Close</button>
				<img src={this.state.src}/>
			</div>
		)
		
	}
}


// <img className={style} src={src}/>