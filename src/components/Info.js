import React, { Component } from 'react';
import className from 'classnames';

let close = require('./../imgs/x.close.png');

require('!style!css!sass!./../sass/info.scss');

class Info extends Component {
	render() {
		let showInfo = className('pick-info', {
			'open': this.props.show
		})

		let blocks = this.renderBlocks();

		return (
			<div className={showInfo}>
				<img className="close" src={close} onClick={() => this.props.showInfo(false)}/>
				<div className="pick-title">The Tree of Life</div>
				{ blocks }
			</div>
		)
	}

	renderBlocks() {
		return this.props.info.info.map((info, index) => {
			return (
				<div key={index} className="block">
					<span className="bold">{info.title}</span> - {info.text}
				</div>
			)
		})
	}
}

export default Info;