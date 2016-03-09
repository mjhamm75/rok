import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageMap from './ImageMap';
import SkyLight from './ReactSkylight';
import Nav from './Nav';
import { updateSelectedGlass } from './../actions/GlassActions';
import { removeSelectedGlass } from './../actions/GlassActions';
import numeral from 'numeral';

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
	}
	addPiece() {
		this.refs.simpleDialog.hide();
		this.refs.imagemap.clear();
		this.props.dispatch(updateSelectedGlass('test', this.state.selectedGlass.id, this.state.selectedGlass.amount));
		this.refs.continueDialog.show();
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
				<Nav selectedItems={this.props.selectedItems} removePiece={this.removePiece.bind(this)}/>
				<div className="imagemap">
					<ImageMap ref="imagemap" source={b1} mappingName={glass} coords={this.state.coords} selectArea={this.selectArea.bind(this)}/>
				</div>
				<SkyLight 
					ref="simpleDialog" 
					title="Tree of Knowledge"
					hideOnOverlayClicked>
					<ul className="pieces">
						{piecesDOM}
					</ul>
					<a className="sky-button" onClick={this.addPiece.bind(this)}>Add Piece</a>
				</SkyLight>
				<SkyLight
					ref="continueDialog">
					<div className="continue-wrapper">
						<img className="check" src={check} />
						<div>Added</div>
						<a className="add">Add more pieces</a>
						<a className="checkout">Checkout</a>
					</div>
				</SkyLight>
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

	selectArea(areaId) {
		let selectedArea = this.state.coords.find(coord => {
			return coord.id === parseInt(areaId);
		});
		this.setState({
			selectedGlass: selectedArea
		})
		this.refs.simpleDialog.show();
	}
}

function mapStateToProps(state) {
	return {
		selectedItems: state.selectedItems
	}
}

export default connect(mapStateToProps)(Pick);