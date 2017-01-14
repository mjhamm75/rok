import React, { Component } from 'react';
import className from 'classnames';

let close = require('./../imgs/x.close.png');

require('!style!css!sass!./../sass/info.scss');

import s from './Info.css';

class Info extends Component {
	render() {
		let showInfo = className('pick-info', {
			'open': this.props.show
		})

		let blocks = this.props.info.info ? this.renderBlocks(this.props.info.info) : null;

		return (
			<div className={showInfo}>
				<img className="close" src={close} onClick={() => this.props.showInfo(false)}/>
				<div className="pick-title">{this.props.title}</div>
				{ blocks }
			</div>
		)
	}

	renderBlocks(info) {
		return info.map((item, index) => {
			return (
				<div key={index} className="block">
					<span className="bold">{item.title}</span> - {item.text}
				</div>
			)
		})
	}
}

export default Info;
