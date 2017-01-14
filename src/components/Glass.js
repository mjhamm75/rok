import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';

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

import f1 from './../imgs/panel_thumbnails/F-1.jpg'
import f2 from './../imgs/panel_thumbnails/F-2.jpg'
import f3 from './../imgs/panel_thumbnails/F-3.jpg'

import g1 from './../imgs/panel_thumbnails/G-1.jpg'
import g2 from './../imgs/panel_thumbnails/G-2.jpg'
import g3 from './../imgs/panel_thumbnails/G-3.jpg'

import h1 from './../imgs/panel_thumbnails/H-1.jpg'
import h2 from './../imgs/panel_thumbnails/H-2.jpg'
import h3 from './../imgs/panel_thumbnails/H-3.jpg'

import Nav from './Nav';

import s from './Glass.css';

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
			<div>
				<Nav fixed="true"/>
				<div className={s.images}>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'a1')}
							src={a1}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'a2')}
							src={a2}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'a3')}
							src={a3}
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'b1')}
							src={b1}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'b2')}
							src={b2}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'b3')}
							src={b3}
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'c1')}
							src={c1}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'c2')}
							src={c2}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'c3')}
							src={c3}
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'd1')}
							src={d1}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'd2')}
							src={d2}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'd3')}
							src={d3}
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'e1')}
							src={e1}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'e2')}
							src={e2}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'e3')}
							src={e3}
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'f1')}
							src={f1}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'f2')}
							src={f2}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'f3')}
							src={f3}
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'g1')}
							src={g1}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'g2')}
							src={g2}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'g3')}
							src={g3}
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'h1')}
							src={h1}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'h2')}
							src={h2}
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'h3')}
							src={h3}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(Glass);
