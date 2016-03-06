import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';

import b1 from './../imgs/b1.jpg'
import b2 from './../imgs/b2.jpg'
import b3 from './../imgs/b3.jpg'

import c1 from './../imgs/c1.jpg'
import c2 from './../imgs/c2.jpg'
import c3 from './../imgs/c3.jpg'

import d1 from './../imgs/d1.jpg'
import d2 from './../imgs/d2.jpg'
import d3 from './../imgs/d3.jpg'

import e1 from './../imgs/e1.jpg'
import e2 from './../imgs/e2.jpg'
import e3 from './../imgs/e3.jpg'

import Nav from './Nav';
import Copywrite from './Copywrite';
import Overlay from './Overlay';

require('!style!css!sass!./../sass/glass.scss');

class Glass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src: '',
			showOverlay: false
		}
	}
	componentDidMount() {
		document.body.style.background = '#4A4A4A';
	}
	componentWillUnmount() {
		document.body.style.background = '#FFFFFF';	
	}
	updateOverlay(src) {
		browserHistory.push('/pick')
		// this.setState({
		// 	showOverlay: true,
		// 	src: src
		// })

	}
	hideOverlay() {
		this.setState({
			showOverlay: false
		})
	}
	render() {
		return (
			<div className="glass">
				<Nav fixed="true" selectedItems={this.props.selectedItems}/>
				<Overlay src={this.state.src} showOverlay={this.state.showOverlay} hide={this.hideOverlay.bind(this)}/>
				<div className="image">
					<div>
						<img src={b1} onClick={this.updateOverlay.bind(this, b1)}/>
						<img src={c1} onClick={this.updateOverlay.bind(this, c1)}/>
						<img src={d1} onClick={this.updateOverlay.bind(this, d1)}/>
						<img src={e1} onClick={this.updateOverlay.bind(this, e1)}/>
					</div>
					<div>
						<img src={b2} onClick={this.updateOverlay.bind(this, b2)}/>
						<img src={c2} onClick={this.updateOverlay.bind(this, c2)}/>
						<img src={d2} onClick={this.updateOverlay.bind(this, d2)}/>
						<img src={e2} onClick={this.updateOverlay.bind(this, e2)}/>
					</div>
					<div>
						<img src={b3} onClick={this.updateOverlay.bind(this, b3)}/>
						<img src={c3} onClick={this.updateOverlay.bind(this, c3)}/>
						<img src={d3} onClick={this.updateOverlay.bind(this, d3)}/>
						<img src={e3} onClick={this.updateOverlay.bind(this, e3)}/>
					</div>
				</div>
				<Copywrite show={!this.state.showOverlay}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedItems: state.selectedItems
	}
}
export default connect(mapStateToProps)(Glass);