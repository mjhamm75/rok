import React, { Component } from 'react';
import { browserHistory } from 'react-router';
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
			continue: false,
			glassName: null,
			imageId: null,
			amount: null
		}
		this.checkout = this.checkout.bind(this)
	}

	componentDidMount() {
		document.body.style.background = '#4A4A4A';
	}
	componentWillUnmount() {
		document.body.style.background = '#FFFFFF';	
	}

	componentDidUpdate() {
		var that = this;
		if(this.props.paths.length > 0) {
			setTimeout(function() {
				that.props.paths.forEach(path => {
					if(path.amount) {
						zepto(`[id='${path.path_id}']`).addClass('purchased');
					}
				})

				zepto('svg path').on('click', function(e) {
					that.setState({
						glassName: 'glass',
						imageId: parseInt(e.target.attributes.id.value),
						amount: parseInt(e.target.attributes.value.value)
					})
					that.refs.simpleDialog.show();
				})
			}, 100);
		}
	}

	addPiece(glassName, id, amount) {
		this.refs.simpleDialog.hide();
		this.props.dispatch(updateSelectedGlass(this.state.glassName, this.state.id, this.state.amount));
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
			<div className="pick">
				<Nav fixed="true" resetOpenCart={this.resetOpenCart.bind(this)}/>
				<div className="svg">
					<div className="back" onClick={() => browserHistory.push('/glass')}>Back</div>
					<div className="title">{this.props.svg.title}</div>
					<div dangerouslySetInnerHTML={{__html: this.props.svg.svg}}></div>
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
		svg: state.svg.svg,
		paths: state.svg.paths,
		toggleCart: state.toggleCart
	}
}

export default connect(mapStateToProps)(Pick);