import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageMap from './ImageMap';
import Skylight from './ReactSkylight';
import Nav from './Nav';
import { removeSelectedGlass, updateSelectedGlass, openCheckout, showThankYou } from './../actions/GlassActions';
import numeral from 'numeral';
import logo from './../imgs/rok-logo.png';
import fb from './../imgs/facebook.png';
import zepto from 'npm-zepto';

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

	componentDidUpdate() {
		console.log(zepto);
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
		var piece = this.state.selectedGlass;
		var piecesDOM = piece ? this.renderSelectedGlass(piece) : null
		return (
			<div>
				<Nav fixed="true"/>
				<Skylight 
					ref="simpleDialog" 
					title="Tree of Knowledge"
					hideOnOverlayClicked>
					<ul className="pieces">
						{piecesDOM}
					</ul>
					<a className="sky-button" onClick={this.addPiece.bind(this)}>Add Piece</a>
				</Skylight>
				<div className="svg">
					<div>{this.props.svg.title}</div>
					<div dangerouslySetInnerHTML={{__html: this.props.svg.svg}}></div>
				</div>
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
		svg: state.svg.svg,
		paths: state.svg.paths,
		toggleCart: state.toggleCart
	}
}

export default connect(mapStateToProps)(Pick);