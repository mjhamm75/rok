import React, { Component } from 'react';
import className from 'classnames';

let close = require('./../imgs/x.close.png');

import s from './Info.css';

class Info extends Component {
	render() {
		let showInfo = className(s.pick, {
			[s.open]: this.props.show
		})

		let blocks = this.props.info.info ? this.renderBlocks(this.props.info.info) : null;

		return (
			<div className={showInfo}>
				<img className={s.close} src={close} onClick={() => this.props.showInfo(false)}/>
				<div className={s.title}>{this.props.title}</div>
				{ blocks }
			</div>
		)
	}

	renderBlocks(info) {
		return info.map((item, index) => {
			return (
				<div key={index} className={s.block}>
					<span className={s.bold}>{item.title}</span> - {item.text}
				</div>
			)
		})
	}
}

export default Info;
