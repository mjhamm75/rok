import React, { Component } from 'react';
import bag from './../imgs/shopping-bag.png'
require('!style!css!sass!./../sass/shopping.bag.scss');

class ShoppingBagIcon extends Component {
	render() {
		var hideBag = !this.props.selectedItems || this.props.selectedItems.length === 0 ? {
			display: 'none'
		} : null;

		return (
			<div className="bag-wrapper" onClick={this.props.onClick}>
				<div style={hideBag} className="circle">{this.props.selectedItems && this.props.selectedItems.length}</div>
				<img className="bag" src={bag}/>
			</div>
		)
	}
}

export default ShoppingBagIcon;