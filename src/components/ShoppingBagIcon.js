import React, { Component } from 'react';
import bag from './../imgs/shopping-bag.png'

import s from './ShoppingBagIcon.css';

class ShoppingBagIcon extends Component {
	render() {
		var hideBag = !this.props.selectedItems || this.props.selectedItems.length === 0 ? {
			display: 'none'
		} : null;

		return (
			<div className={s.wrapper} onClick={this.props.onClick}>
				<div style={hideBag} className={s.circle}>{this.props.selectedItems && this.props.selectedItems.length}</div>
				<img className={s.bag} src={bag}/>
			</div>
		)
	}
}

export default ShoppingBagIcon;
