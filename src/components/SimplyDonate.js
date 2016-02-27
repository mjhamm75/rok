import React, { Component } from 'react';
import Nav from './Nav';
import bag from './../imgs/shopping.bag.black.png'

require('!style!css!sass!./../sass/simply.donate.scss');

class SimplyDonate extends Component {
	render() {
		return (
			<div className="simply-donate">			
				<Nav fixed="true"/>
				<div className="form">
					<img className="black-bag" src={bag}/>
					<div className="title">Add your piece to the story</div>
					<div className="inspire">Your donation will help inspire others with a masterpiece of epic size.</div>
					<div className="amount">Donation Amount</div>
					<input />
					<div>
						<div>Total</div>
						<div>$0.00</div>
					</div>
					<input />
					<input />
					<input />
					<div>
						<div>
							<input /><input /> 
						</div>
						<input />
					</div>
					<input />
					<div>
						<a>Donate</a>
					</div>
				</div>
			</div>
		)
	}
}

export default SimplyDonate;