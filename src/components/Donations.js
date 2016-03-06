import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Nav from './Nav';
import Copywrite from './Copywrite';
import { removeSelectedGlass } from './../actions/GlassActions';
import img from './../imgs/wall-exterior.png';
require('!style!css!sass!./../sass/donations.scss');

class Donations extends Component {
	render() {
		return (
			<div className="donations">
				<Nav fixed="true" selectedItems={this.props.selectedItems} removePiece={this.removePiece.bind(this)}/>
				<div className="hero">
					<div>Explore the wall and find a piece of glass to sponsor.</div>
					<div>Enjoy the story along the way.</div>
					<Link to="glass">Select a piece of glass</Link>
				</div>
				<Copywrite />
			</div>
		)
	}

	removePiece(name, id) {
		this.dispatch();
	}
}

function mapStateToProps(state) {
	return {
		selectedItems: state.selectedItems
	}
}

export default connect(mapStateToProps)(Donations);