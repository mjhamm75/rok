import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageMap from './ImageMap';
import SkyLight from 'react-skylight';
import { updateSelectedGlass } from './../actions/GlassActions';
import numeral from 'numeral';

import coordsObj from './coordsObj.js';
import b1 from './../imgs/b1.jpg'

require('!style!css!sass!./../sass/pick.scss');

class Pick extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coords: coordsObj
		}
	}
	addPiece() {
		this.refs.simpleDialog.hide();
		this.refs.imagemap.clear();
	}

	render() {
		var glass = "glass";
		var pieces = this.props.selectedGlass;
		var piecesDOM = this.renderSelectedGlass(pieces);
		return (
			<div>
				<h1>Pick</h1>
				<ImageMap ref="imagemap" source={b1} mappingName={glass} coords={this.state.coords} selectArea={this.selectArea.bind(this)}/>
				<button onClick={() => this.refs.simpleDialog.show()}>Open Modal</button>
				<SkyLight 
					ref="simpleDialog" 
					title="Tree of Knowledge"
					hideOnOverlayClicked>
					<ul className="pieces">
						{piecesDOM}
					</ul>
		          	<a className="sky-button" onClick={this.addPiece.bind(this)}>Add Piece</a>
		        </SkyLight>
			</div>
		)
	}

	renderSelectedGlass(pieces) {
		return pieces.map((piece, index) => {
			return (
				<li className="piece" key={index}>
					<div className="name">{piece.name} - {piece.id}</div>
					<div className="amount">{numeral(piece.amount).format('$0')}</div>
				</li>
			)
		})
	}

	selectArea(areaId) {
		let selectedArea = this.state.coords.find(coord => {
			return coord.id === parseInt(areaId);
		});
		this.props.dispatch(updateSelectedGlass('test', selectedArea.id, selectedArea.amount));
		this.refs.simpleDialog.show();
	}
}

function mapStateToProps(state) {
	return {
		selectedGlass: state.selectedGlass
	}
}

export default connect(mapStateToProps)(Pick);