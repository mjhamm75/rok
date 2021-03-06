import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Skylight from './ReactSkylight';
import Info from './Info';
import Cart from './Cart';
import Nav from './Nav';
import ShoppingBagIcon from './ShoppingBagIcon';
import {
	charge,
	chargeButtonEnabled,
	clearSvg,
	clearImage,
	getPathInfo,
	openCheckout,
	removeSelectedGlass,
	retrieveSvg,
	showThankYou,
	updateSelectedGlass,
} from './../actions/GlassActions';
import numeral from 'numeral';
import logo from './../imgs/rok-logo.png';
import fb from './../imgs/facebook.png';

import back from './../imgs/back.arrow.png'
import infoIcon from './../imgs/info.png'
import check from './../imgs/check.png';

import info from './../mappings/pick.info.js';


import s from './Pick.css';

class Pick extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: null,
			continue: false,
			glassName: this.props.routeParams.splat,
			info: info[this.props.routeParams.splat] || [],
			fakePurchasedPieces: [],
			showCart: false,
			showSponsered: false
		}
		this.checkout = this.checkout.bind(this);
		this.showCart = this.showCart.bind(this);
		this.props.dispatch(getPathInfo(this.props.routeParams.splat));
		this.props.dispatch(retrieveSvg(this.props.routeParams.splat));
	}

	disableDonateButton() {
		this.props.dispatch(chargeButtonEnabled(false));
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
		if(newProps.paths.length > 0 && this.state.fakePurchasedPieces.length === 0) {
			let unpurchasedPieces = newProps.paths.filter(path => {
				return !path.customer && path.amount === "25.00";
			})
			if(unpurchasedPieces.length > 50) {
				let randomArr = unpurchasedPieces.sort(() => 0.5 - Math.random());
				let fakePurchasedPieces = randomArr.slice(0, randomArr.length/2);
				this.setState({
					fakePurchasedPieces
				});
			}
		}
	}

	componentDidUpdate(prevProps, prevState) {
		var that = this;
		if(!this.state.showSponsered && this.props.glass) {
			let purchasedGlass = this.props.paths.filter(path => {
				return path.customer !== null;
			})

			purchasedGlass.forEach(glass => {
				let el = document.querySelectorAll(`[id='${glass.path_id}']`);
				el[0].setAttribute('class', '');
			});

			this.state.fakePurchasedPieces.forEach(glass => {
				let el = document.querySelectorAll(`[id='${glass.path_id}']`);
				el[0].setAttribute('class', '');
			})
		}

		if(this.props.paths.length > 0 && this.state.showSponsered && this.props.glass) {
			this.props.paths.filter(path => {
				return path.customer !== null;
			}).forEach(glass => {
				let el = document.querySelectorAll(`[id='${glass.path_id}']`);
				el[0].setAttribute('class', 'purchased');
			});

			this.state.fakePurchasedPieces.forEach(glass => {
				let el = document.querySelectorAll(`[id='${glass.path_id}']`);
				el[0].setAttribute('class', 'purchased');
			})
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

	showAlreadySponsored(glass, x, y) {
		let popup = document.querySelectorAll('.popup.sponsored')
		this.showPopup(popup, glass, x, y);
	}

	showUnavailable(glass, x, y) {
		let popup = document.querySelectorAll('.popup.unavailable')
		this.showPopup(popup, glass, x, y);
	}

	showPopup(popup, glass, x, y) {
		popup[0].style.display = 'inline';
		popup[0].style.left = x - 100;
		popup[0].style.top = y - 25;
		setTimeout(() => {
			popup[0].style.display = 'none';
		}, 500);
		let el = document.querySelectorAll(`[id='${glass.path_id}']`);
		el[0].setAttribute('class', 'purchased');
		setTimeout(() => {
			el[0].setAttribute('class', '');
		}, 750)
	}

	clickSvg(e) {
		if(!e.target.id) return;
		let glassPath = this.props.paths.find(path => path.path_id === parseInt(e.target.id));
		let fakePath = this.state.fakePurchasedPieces.find(fake => fake.path_id === parseInt(e.target.id));
		if(glassPath.customer || fakePath) {
			this.showAlreadySponsored(glassPath, e.pageX, e.pageY);
			return;
		}
		if(!glassPath || parseFloat(glassPath.amount) === 0 || isNaN(parseFloat(glassPath.amount))) {
			this.showUnavailable(glassPath, e.pageX, e.pageY);
			return;
		}
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

	back() {
		this.props.dispatch(clearSvg());
		browserHistory.push('/glass')
	}

	render() {
		if(this.props.glass === "") {
			return null;
		}
		let popupStyle = {
			background: 'white',
			display: 'none',
			padding: '3px',
			position: 'absolute'
		}
		let piece = this.state.selectedGlass;
		let piecesDOM = piece ? this.renderSelectedGlass(piece) : null
		let GlassComponent = this.state.glass;
		return (
			<div>
			<span style={popupStyle} className="popup sponsored">This piece has been sponsored</span>
			<span style={popupStyle} className="popup unavailable">This piece is currently unavailable	</span>
				<Cart
					charge={this.charge.bind(this)}
					closeCart={() => this.showCart(false)}
					chargeButtonEnabled={this.props.chargeButtonEnabled}
					disableDonateButton={this.disableDonateButton.bind(this)}
					removePiece={this.removePiece.bind(this)}
					selectedItems={this.props.selectedItems}
					show={this.props.showCart}
					/>
				<Info
					info={this.state.info}
					show={this.state.show}
					showInfo={this.showInfo.bind(this)}
					title={this.state.glassName}
				/>
			<div className={s.pick}>
					<img
						className={s.back}
						onClick={() => this.back()}
						src={back}
					></img>
					<div className={s.glass}>
						<div className={s.checkboxWrapper}>
					    <label
								className={s.checkboxLabel}
							>Sponsored</label>
					    <input
								type="checkbox"
								className={s.checkbox}
								checked={this.state.showSponsered}
								onClick={this.updateShowSponsered.bind(this)}
							/>
						</div>
						<div dangerouslySetInnerHTML={{__html: this.props.glass}} onClick={e => this.clickSvg(e)}></div>
					</div>
					<img className={s.info} src={infoIcon} onClick={() => this.setState({show: true})}/>
					<ShoppingBagIcon selectedItems={this.props.selectedItems} onClick={() => this.showCart(true) } />
				</div>
				<Skylight
					ref="simpleDialog"
					title="Tree of Knowledge"
					hideOnOverlayClicked>
					<ul className={s.pieces}>
						{piecesDOM}
					</ul>
					<a className={s.skyButton} onClick={this.addPiece.bind(this)}>Add Piece</a>
				</Skylight>
				<Skylight
					ref="continueDialog">
					<div className={s.checkWrapper}>
						<img className={s.check} src={check} />
						<div className={s.checkTitle}>Added</div>
						<a className={s.add} onClick={() => this.refs.continueDialog.hide()}>Add more pieces</a>
						<a className={s.checkout} onClick={() => this.checkout()}>Checkout</a>
					</div>
				</Skylight>
			</div>
		)
	}

	renderSelectedGlass(piece) {
		return (
			<li className={s.piece}>
				<div>{"test"} - {piece.id}</div>
				<div className={s.amount}>{numeral(piece.amount).format('$0')}</div>
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
		chargeButtonEnabled: state.chargeButtonEnabled,
		glass: state.svgMapping,
		paths: state.paths,
		selectedItems: state.selectedItems,
		showCart: state.toggleCart,
	}
}

export default connect(mapStateToProps)(Pick);
