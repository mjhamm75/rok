import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageMap from './ImageMap';
import Skylight from './ReactSkylight';
import Nav from './Nav';
import { removeSelectedGlass, updateSelectedGlass, openCheckout, showThankYou } from './../actions/GlassActions';
import numeral from 'numeral';
import logo from './../imgs/rok-logo.png';
import fb from './../imgs/facebook.png';

import coordsObj from './coordsObj.js';
import b1 from './../imgs/b1.jpg'

let check = require('./../imgs/check.png');

require('!style!css!sass!./../sass/pick.scss');

class Pick extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coords: coordsObj,
			continue: false
		}
		this.checkout = this.checkout.bind(this)
	}

	addPiece() {
		this.refs.simpleDialog.hide();
		this.refs.imagemap.clear();
		this.props.dispatch(updateSelectedGlass('test', this.state.selectedGlass.id, this.state.selectedGlass.amount));
		this.refs.continueDialog.show();
	}

	checkout() {
		this.props.dispatch(openCheckout(true));
		this.refs.continueDialog.hide();
	}

	removePiece(name, id) {
		this.props.dispatch(removeSelectedGlass(name, id));
	}

	render() {
		var glass = "glass";
		var piece = this.state.selectedGlass;
		var piecesDOM = piece ? this.renderSelectedGlass(piece) : null
		return (
			<div className="pick">
				<Nav selectedItems={this.props.selectedItems} removePiece={this.removePiece.bind(this)} openCart={this.props.toggleCart} resetOpenCart={this.resetOpenCart.bind(this)} thankyou={this.thankyou.bind(this)}/>
				<div className="imagemap">
					<ImageMap ref="imagemap" source={b1} mappingName={glass} coords={this.state.coords} selectArea={this.selectArea.bind(this)}/>
				</div>
				<Skylight 
					ref="thankyou"
					width="400"
					marginTop="-325"
					title="Tree of Knowledge"
					afterClose={this.closeThankyou.bind(this)}
					hideOnOverlayClicked>
					<div className="thankyou">
						<img src={logo}/>
						<div>Thank You</div>
						<div>Your donation will help inspire others with a masterpiece of epic size.</div>
						<div className="share">
							<div>Share Roots of Knowledge with others</div>
							<div className="share-button" onClick={this.shareFacebook.bind(this)}>
								<img src={fb}/>
								<span>Share</span>
							</div>
						</div>
					</div>
				</Skylight>
				<Skylight 
					ref="simpleDialog" 
					title="Tree of Knowledge"
					hideOnOverlayClicked>
					<ul className="pieces">
						{piecesDOM}
					</ul>
					<a className="sky-button" onClick={this.addPiece.bind(this)}>Add Piece</a>
				</Skylight>
				<Skylight
					ref="continueDialog">
					<div className="continue-wrapper">
						<img className="check" src={check} />
						<div>Added</div>
						<a className="add" onClick={() => this.refs.continueDialog.hide()}>Add more pieces</a>
						<a className="checkout" onClick={() => this.checkout()}>Checkout</a>
					</div>
				</Skylight>
			</div>
		)
	}

	renderSelectedGlass(piece) {
		return (
			<li className="piece">
				<div className="name">{"test"} - {piece.id}</div>
				<div className="amount">{numeral(piece.amount).format('$0')}</div>
			</li>
		)
	}

	resetOpenCart() {	
		this.props.dispatch(openCheckout(false));
	}

	selectArea(areaId) {
		let selectedArea = this.state.coords.find(coord => {
			return coord.id === parseInt(areaId);
		});
		this.setState({
			selectedGlass: selectedArea
		})
		this.refs.simpleDialog.show();
	}

	shareFacebook() {
		debugger;
	}

	thankyou() {
		this.refs.thankyou.show();
	}

	closeThankyou() {
	}
}

function mapStateToProps(state) {
	return {
		selectedItems: state.selectedItems,
		toggleCart: state.toggleCart
	}
}

export default connect(mapStateToProps)(Pick);