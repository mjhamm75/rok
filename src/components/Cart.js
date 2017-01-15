import React, { Component } from 'react';
import classnames from 'classnames';
import bag from './../imgs/shopping.bag.black.png'
import numeral from 'numeral';
import publish from '../../db/stripe-publish.js';

import s from './Cart.css';

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: this.props.show
		}
		var that = this;
		this.handler = StripeCheckout.configure({
			key: publish(),
			image: '/rok-logo.png',
			locale: 'auto',
			'billing-address': true,
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

		let cart = classnames(s.cart, {
			[s.open]: this.state.show
		})

		let hideItemTotal = this.props.selectedItems.length === 0 ? {
			display: 'none'
		} : null;

		let donateButton = classnames(s.button, {
			'disabled': !this.props.chargeButtonEnabled
		})

		let totalBorder = classnames(s.border, {
			[s.hideBorder]: this.props.selectedItems.length === 0
		});

		return (
			<div className={cart}>
				<div className={s.close} onClick={() => this.props.closeCart() }>close</div>
				<img className={s.bag} src={bag}/>
				<div className={s.header}>Add your piece to the story</div>
				<div className={s.blurb}>Your donation will help inspire others with a masterpiece of epic size.</div>
					{selectedItems}
				<div className={totalBorder}/>
				<div style={hideItemTotal}></div>
				<div className={s.item} style={hideItemTotal}>
					<div className={s.itemWidth}>
						<div className={s.itemName}>
							Total
						</div>
					</div>
					<div className={s.itemAmount}>
						{numeral(total).format('$0,00')}
					</div>
					<div className={s.removeItem}></div>
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
				<div className={s.item} key={index}>
					<div className={s.itemWidth}>
						<div className={s.itemName}>{item.name}</div>
						<div className={s.itemId}>Piece {item.id}</div>
					</div>
					<div className={s.itemAmount}>
						{numeral(item.amount).format('$0,00')}
					</div>
					<div
						className={s.removeItem}
						onClick={() => this.props.removePiece(item.name, item.id)}
					>x</div>
				</div>
			)
		});
	}
}

export default Cart;
