import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';

import { getPathInfo } from './../actions/GlassActions'

import a1 from './../imgs/panel_thumbnails/A-1.jpg'
import a2 from './../imgs/panel_thumbnails/A-2.jpg'
import a3 from './../imgs/panel_thumbnails/A-3.jpg'

import b1 from './../imgs/panel_thumbnails/B-1.jpg'
import b2 from './../imgs/panel_thumbnails/B-2.jpg'
import b3 from './../imgs/panel_thumbnails/B-3.jpg'

import c1 from './../imgs/panel_thumbnails/C-1.jpg'
import c2 from './../imgs/panel_thumbnails/C-2.jpg'
import c3 from './../imgs/panel_thumbnails/C-3.jpg'

import d1 from './../imgs/panel_thumbnails/D-1.jpg'
import d2 from './../imgs/panel_thumbnails/D-2.jpg'
import d3 from './../imgs/panel_thumbnails/D-3.jpg'

import e1 from './../imgs/panel_thumbnails/E-1.jpg'
import e2 from './../imgs/panel_thumbnails/E-2.jpg'
import e3 from './../imgs/panel_thumbnails/E-3.jpg'

import Nav from './Nav';

require('!style!css!sass!./../sass/glass.scss');

class Glass extends Component {
	componentDidMount() {
		document.body.style.background = '#4A4A4A';
	}
	componentWillUnmount() {
		document.body.style.background = '#FFFFFF';
	}
	updateOverlay(svgId) {
		browserHistory.push(`/pick/${svgId}`);
	}
	render() {
		return (
			<div className="glass">
				<Nav fixed="true"/>
				<div className="image desktop">
					<div>
						<img src={a1} onClick={this.updateOverlay.bind(this, 'a1')}/>
						<img src={a2} onClick={this.updateOverlay.bind(this, 'a2')}/>
						<img src={a3} onClick={this.updateOverlay.bind(this, 'a3')}/>
					</div>
					<div>
						<img src={b1} onClick={this.updateOverlay.bind(this, 'b1')}/>
						<img src={b2} onClick={this.updateOverlay.bind(this, 'b2')}/>
						<img src={b3} onClick={this.updateOverlay.bind(this, 'b3')}/>
					</div>
					<div>
						<img src={c1} onClick={this.updateOverlay.bind(this, c1)}/>
						<img src={c2} onClick={this.updateOverlay.bind(this, c2)}/>
						<img src={c3} onClick={this.updateOverlay.bind(this, c3)}/>
					</div>
					<div>
						<img src={d1} onClick={this.updateOverlay.bind(this, d1)}/>
						<img src={d2} onClick={this.updateOverlay.bind(this, d2)}/>
						<img src={d3} onClick={this.updateOverlay.bind(this, d3)}/>
					</div>
					<div>
						<img src={e1} onClick={this.updateOverlay.bind(this, e1)}/>
						<img src={e2} onClick={this.updateOverlay.bind(this, e2)}/>
						<img src={e3} onClick={this.updateOverlay.bind(this, e3)}/>
					</div>
				</div>
				<div className="mobile">
					<div>
						<img src={b1} onClick={this.updateOverlay.bind(this, 13)}/>
						<img src={b2} onClick={this.updateOverlay.bind(this, b2)}/>
						<img src={b3} onClick={this.updateOverlay.bind(this, b3)}/>
					</div>
					<div>
						<img src={c1} onClick={this.updateOverlay.bind(this, c1)}/>
						<img src={c2} onClick={this.updateOverlay.bind(this, c2)}/>
						<img src={c3} onClick={this.updateOverlay.bind(this, c3)}/>
					</div>
					<div>
						<img src={d1} onClick={this.updateOverlay.bind(this, d1)}/>
						<img src={d2} onClick={this.updateOverlay.bind(this, d2)}/>
						<img src={d3} onClick={this.updateOverlay.bind(this, d3)}/>
					</div>
					<div>
						<img src={e1} onClick={this.updateOverlay.bind(this, e1)}/>
						<img src={e2} onClick={this.updateOverlay.bind(this, e2)}/>
						<img src={e3} onClick={this.updateOverlay.bind(this, e3)}/>
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(Glass);
