import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import bag from './../imgs/shopping.bag.black.png';

require('!style!css!sass!./../sass/simply.donate.scss');

class SimplyDonate extends Component {
	constructor(props) {
		super(props)
			this.handler = StripeCheckout.configure({
				key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
				image: '/rok-logo.png',
				locale: 'auto',
				token: function(token) {
				// Use the token to create the charge with a server-side script.
				// You can access the token ID with `token.id`
				}
			});
	}
	checkout() {
		this.handler.open({
			name: 'Roots of Knowledge',
			description: 'Donation',
			amount: this.refs.total.value * 100,
			email: this.refs.email.value
		});
	}

	render() {
		return (
			<div className="simply-donate">
				<Nav fixed="true" selectedItems={this.props.selectedItems}/>
				<div className="form">
					<img className="black-bag" src={bag}/>
					<div className="title">Add your piece to the story</div>
					<div className="inspire">Your donation will help inspire others with a masterpiece of epic size.</div>
					<div className="amount">Donation Amount</div>
					<input ref="total" placeholder=" $ USD"/>
					<div>
						<div className="total">Total</div>
						<div className="total-amount">$0.00</div>
					</div>
					<input className="email" ref="email" placeholder=" email address"/>
					<div>
						<a onClick={this.checkout.bind(this)}>Donate</a>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedItems: state.selectedItems
	}
}
export default connect(mapStateToProps)(SimplyDonate);
