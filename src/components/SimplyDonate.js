import React, { Component } from 'react';
import { connect } from 'react-redux';
import className from 'classnames';
import Nav from './Nav';
import bag from './../imgs/shopping.bag.black.png';
import { clearDonationForm, donate, chargeButtonEnabled } from '../actions/GlassActions';
import publish from '../../db/stripe-publish.js';

import s from './SimplyDonate.css';

class SimplyDonate extends Component {
	constructor(props) {
		super(props)
		var that = this;
		this.state = {
			total: 0
		}
		this.handler = StripeCheckout.configure({
			key: publish(),
			image: '/rok-logo.png',
			locale: 'auto',
			'billing-address': true,
			token: function(token) {
				let total = parseFloat(that.refs.total.value) * 100;
				that.props.dispatch(donate(token.id, total, token.email));
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

	updateTotal() {
		this.setState({
			total: this.refs.total.value
		})
	}

	render() {
		let disabled = className(s.button, {
			disabled: !this.props.chargeButtonEnabled
		})
		return (
			<div>
				<Nav fixed="true" selectedItems={this.props.selectedItems}/>
				<div className={s.form}>
					<img className={s.blackBag} src={bag}/>
					<div className={s.title}>Add your piece to the story</div>
					<div className={s.inspire}>Your donation will help inspire others with a masterpiece of epic size.</div>
					<div className={s.amount}>Donation Amount</div>
					<input
						className={s.input}
						onChange={this.updateTotal.bind(this)}
						placeholder=" $ USD"
						ref="total"
					/>
					<div className={s.totalWrapper}>
						<div className={s.total}>Total</div>
						<div className={s.totalAmount}>${this.state.total}</div>
					</div>
					<input className={s.email} ref="email" placeholder=" email address"/>
					<div className={s.buttonWrapper}>
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
