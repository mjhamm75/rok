import React, { Component } from 'react';
import classNames from 'classnames';

require('!style!css!sass!./../sass/overlay.scss');

export default class Overlay extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showOverlay: props.showOverlay
		}
	}

	componentWillReceiveProps(props) {
		this.setState({
			showOverlay: props.showOverlay
		})
	}

	render() {
		let { src } = this.props;

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

			</div>
		)
		
	}
}


// <img className={style} src={src}/>