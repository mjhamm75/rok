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
		return (<div dangerouslySetInnerHTML={{__html: this.props.svg.svg}}></div>)
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
		svg: state.svg,
		toggleCart: state.toggleCart
	}
}

export default connect(mapStateToProps)(Pick);