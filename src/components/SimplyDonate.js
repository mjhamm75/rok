import React, { Component } from 'react';
import { connect } from 'react-redux';
import className from 'classnames';
import Nav from './Nav';
import bag from './../imgs/shopping.bag.black.png';
import { clearDonationForm, donate, chargeButtonEnabled } from '../actions/GlassActions';
import publish from '../../db/stripe-publish.js';

require('!style!css!sass!./../sass/simply.donate.scss');

class SimplyDonate extends Component {
	constructor(props) {
		super(props)
		console.log(publish())
		var that = this;
		this.handler = StripeCheckout.configure({
			key: publish(),
			image: '/rok-logo.png',
			locale: 'auto',
			token: function(token) {
				that.props.dispatch(donate(token.id, that.refs.total * 100, token.email));
			}
		});
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.clear) {
			this.refs.total.value = "";
			this.refs.email.value = "";
			this.props.dispatch(clearDonationForm(false));
		}
	}

	checkout() {
		this.props.dispatch(chargeButtonEnabled(false));
		this.handler.open({
			name: 'Roots of Knowledge',
			description: 'Donation',
			amount: this.refs.total.value * 100,
			email: this.refs.email.value
		});
	}

	render() {
		let disabled = className({
			disabled: !this.props.chargeButtonEnabled
		})
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
						<a className={disabled} onClick={this.checkout.bind(this)}>Donate</a>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		chargeButtonEnabled: state.chargeButtonEnabled,
		clear: state.clear,
		selectedItems: state.selectedItems
	}
}
export default connect(mapStateToProps)(SimplyDonate);
