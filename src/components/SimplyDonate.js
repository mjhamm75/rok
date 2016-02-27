import React, { Component } from 'react';
import Nav from './Nav';
import bag from './../imgs/shopping.bag.black.png';

require('!style!css!sass!./../sass/simply.donate.scss');

class SimplyDonate extends Component {
	constructor(props) {
		super(props)
			this.handler = StripeCheckout.configure({
				key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
				image: './../../imgs/rok-logo.png',
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
			amount: this.refs.total.value
		});
	}

	render() {
		console.log(StripeCheckout);
		return (
			<div className="simply-donate">			
				<Nav fixed="true"/>
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
					<input className="email" placeholder=" Email Address"/>
					<input placeholder=" Cardholder Name"/>
					<input placeholder=" Credit Card Number"/>
					<div className="exp-date">
						<div>
							<input placeholder=" mm" /><input placeholder=" yy"/> 
						</div>
						<input placeholder=" CCV"/>
					</div>
					<input placeholder=" Zip Code" />
					<div>
						<a onClick={this.checkout.bind(this)}>Donate</a>
					</div>
				</div>
			</div>
		)
	}
}

export default SimplyDonate;