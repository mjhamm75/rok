import React, { Component } from 'react';
import bag from './../imgs/shopping-bag.png'

class ShoppingBagIcon extends Component {
	render() {
		return (
			<div className="bag-wrapper" onClick={this.props.showCart}>
				<div style={this.props.hideBag} className="circle">{this.props.selectedItems && this.props.selectedItems.length}</div>
				<img className="bag" src={bag}/>
			</div>
		)
	}
}

export default ShoppingBagIcon;