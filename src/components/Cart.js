import React, { Component } from 'react';
import className from 'classnames';
import bag from './../imgs/shopping.bag.black.png'
import numeral from 'numeral';

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: this.props.show
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			show: newProps.show
		})
	}

	render() {
		let selectedItems = this.renderSelectedItems();
		let total = this.props.selectedItems.reduce((a, b) => {
			return a + b.amount;
		}, 0)

		let cart = className('cart', {
			'open': this.state.show
		})
		return (
			<div className={cart}>
				<div className="close" onClick={this.closeCart.bind(this)}>close</div>
				<img className="bag" src={bag}/>
				<div className="header">Add your piece to the story</div>
				<div className="blurb">Your donation will help inspire others with a masterpiece of epic size.</div>
					{selectedItems}
				<div className="border"></div>
				<div className="item">
					<div>
						<div>
							Total
						</div>
					</div>
					<div>
						<div>
							{numeral(total).format('$0,00')}
						</div>
					</div>
					<div></div>
				</div>
				<a>Donate</a>
			</div>
		)
	}

	closeCart() {
		this.setState({
			show: false
		})
	}

	removePiece() {
		debugger;
	}

	renderSelectedItems() {
		return this.props.selectedItems.map((item, index) => {
			return (
				<div className="item" key={index}>
					<div>
						<div>{item.name}</div>
						<div className="piece-id">Piece {item.id}</div>
					</div>
					<div>
						<div className="piece-amount">
							{numeral(item.amount).format('$0,00')}
						</div>
					</div>
					<div onClick={this.removePiece.bind(this)}>x</div>
				</div>
			)
		});
	}
}

export default Cart;