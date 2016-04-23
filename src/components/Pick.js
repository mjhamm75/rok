import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Skylight from './ReactSkylight';
import Info from './Info';
import Cart from './Cart';
import Nav from './Nav';
import ShoppingBagIcon from './ShoppingBagIcon';
import { charge, getPathInfo, removeSelectedGlass, updateSelectedGlass, openCheckout, showThankYou } from './../actions/GlassActions';
import numeral from 'numeral';
import logo from './../imgs/rok-logo.png';
import fb from './../imgs/facebook.png';

import back from './../imgs/back.arrow.png'
import infoIcon from './../imgs/info.png'

import mapping from './../mappings/mapping';

import info from './../mappings/pick.info.js';

let check = require('./../imgs/check.png');

require('!style!css!sass!./../sass/pick.scss');

class Pick extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: null,
			continue: false,
			glass: mapping[this.props.routeParams.splat],
			glassName: this.props.routeParams.splat,
			imageId: null,
			showCart: false,
			showSponsered: false
		}
		this.checkout = this.checkout.bind(this);
		this.showCart = this.showCart.bind(this);
		this.props.dispatch(getPathInfo(this.props.routeParams.splat));
	}

	componentDidMount() {
		document.body.style.background = '#4A4A4A';
	}
	componentWillUnmount() {
		document.body.style.background = '#FFFFFF';
	}

	diff(arr1, arr2) {
		return arr1.filter(function(i) {return arr2.indexOf(i) < 0;});
	}

	componentWillReceiveProps(newProps) {
		let diff = this.diff(this.props.selectedItems, newProps.selectedItems);
		if(diff.length > 0) {
			let id = diff[0].id
			let el = document.querySelectorAll(`[id='${id}']`);
			el[0].setAttribute('class', '');
		}
	}

	componentDidUpdate(prevProps, prevState) {
		var that = this;
		if(!this.state.showSponsered) {
			let purchasedGlass = this.props.paths.filter(path => {
				return path.customer !== null;
			})

			purchasedGlass.forEach(glass => {
				let el = document.querySelectorAll(`[id='${glass.path_id}']`);
				el[0].setAttribute('class', '');
			});
		}

		if(this.props.paths.length > 0 && this.state.showSponsered) {
			let purchasedGlass = this.props.paths.filter(path => {
				return path.customer !== null;
			})

			purchasedGlass.forEach(glass => {
				let el = document.querySelectorAll(`[id='${glass.path_id}']`);
				el[0].setAttribute('class', 'purchased');
			});
		}
		if(this.props.selectedItems.length > 0) {
			let selectedGlass = this.props.selectedItems.filter(item => item.name === this.state.glassName);
			selectedGlass.forEach(glass => {
				let el = document.querySelectorAll(`[id='${glass.id}']`);
				el[0].setAttribute('class', 'purchased');
			})
		}
	}

	addPiece(glassName, id, amount) {
		this.refs.simpleDialog.hide();
		this.props.dispatch(updateSelectedGlass(glassName, id, amount));
		this.refs.continueDialog.show();
	}

	checkout() {
		this.props.dispatch(openCheckout(true));
		this.refs.continueDialog.hide();
	}

	removePiece(name, id) {
		this.props.dispatch(removeSelectedGlass(name, id));
	}

	clickSvg(e) {
		if(!e.target.id) return;
		let glassPath = this.props.paths.find(path => path.path_id === parseInt(e.target.id));
		this.addPiece(this.state.glassName, glassPath.path_id, glassPath.amount || 0);
	}

	showInfo(show) {
		this.setState({
			show: show
		})
	}

	showCart(showCart) {
		this.props.dispatch(openCheckout(showCart));
	}

	charge(token, amount, email, selectedItems) {
		this.props.dispatch(charge(token, amount, email, selectedItems));
	}

	updateShowSponsered(e) {
		this.setState({
			showSponsered: e.currentTarget.checked
		})
	}

	render() {
		let piece = this.state.selectedGlass;
		let piecesDOM = piece ? this.renderSelectedGlass(piece) : null
		let GlassComponent = this.state.glass;
		return (
			<div>
				<Cart
					charge={this.charge.bind(this)}
					closeCart={() => this.showCart(false)}
					removePiece={this.removePiece.bind(this)}
					selectedItems={this.props.selectedItems}
					show={this.props.showCart}
					/>
				<Info info={info["b1"]} show={this.state.show} showInfo={this.showInfo.bind(this)}/>
				<div className="pick">
					<img className="back" src={back} onClick={() => browserHistory.push('/glass')}></img>
					<div className="glass">
						<div className="checkbox">
							<input type="checkbox"
								checked={this.state.showSponsered}
								onClick={this.updateShowSponsered.bind(this)}
							/>Sponsored
						</div>
						<GlassComponent click={this.clickSvg.bind(this)}/>
					</div>
					<img className="info" src={infoIcon} onClick={() => this.setState({show: true})}/>
					<ShoppingBagIcon selectedItems={this.props.selectedItems} onClick={() => this.showCart(true) } />
				</div>
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
		paths: state.paths,
		selectedItems: state.selectedItems,
		showCart: state.toggleCart
	}
}

export default connect(mapStateToProps)(Pick);
