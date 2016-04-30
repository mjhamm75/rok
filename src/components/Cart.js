import React, { Component } from 'react';
import className from 'classnames';
import bag from './../imgs/shopping.bag.black.png'
import numeral from 'numeral';

require('!style!css!sass!./../sass/cart.scss');

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: this.props.show
		}
		var that = this;
		this.handler = StripeCheckout.configure({
			key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
			image: '/rok-logo.png',
			locale: 'auto',
			token: function(token) {
				that.props.charge(token.id, that.getTotal() * 100, token.email, that.props.selectedItems);
			},
			closed: function() {

			}
		});
		this.getTotal = this.getTotal.bind(this)
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			show: newProps.show
		})
	}

	getTotal() {
		return this.props.selectedItems.reduce((a, b) => {
			return a + parseFloat(b.amount);
		}, 0)
	}

	render() {
		let selectedItems = this.renderSelectedItems(this.props.selectedItems);
		let total = this.getTotal();

		let cart = className('cart', {
			'open': this.state.show
		})

		let hideItemTotal = this.props.selectedItems.length === 0 ? {
			display: 'none'
		} : null;

		let donateButton = className('donate-button', {
			'disabled': !this.props.chargeButtonEnabled
		})

		return (
			<div className={cart}>
				<div className="close" onClick={() => this.props.closeCart() }>close</div>
				<img className="bag" src={bag}/>
				<div className="header">Add your piece to the story</div>
				<div className="blurb">Your donation will help inspire others with a masterpiece of epic size.</div>
					{selectedItems}
				<div className="border" style={hideItemTotal}></div>
				<div className="item" style={hideItemTotal}>
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
				<a className={donateButton} onClick={this.checkout.bind(this)}>Donate</a>
			</div>
		)
	}

	checkout() {
		if(this.props.chargeButtonEnabled) {
			this.handler.open({
				name: 'Roots of Knowledge',
				description: 'Donation',
				amount: this.getTotal() * 100,
			});
			this.props.disableDonateButton();
		}
	}

	renderSelectedItems(selectedItems) {
		return selectedItems.map((item, index) => {
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
					<div onClick={() => this.props.removePiece(item.name, item.id)}>x</div>
				</div>
			)
		});
	}
}

export default Cart;
