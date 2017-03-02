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

import i1 from './../imgs/panel_thumbnails/I-1.jpg'
import i2 from './../imgs/panel_thumbnails/I-2.jpg'
import i3 from './../imgs/panel_thumbnails/I-3.jpg'

import j1 from './../imgs/panel_thumbnails/J-1.jpg'
import j2 from './../imgs/panel_thumbnails/J-2.jpg'
import j3 from './../imgs/panel_thumbnails/J-3.jpg'

import k1 from './../imgs/panel_thumbnails/K-1.jpg'
import k2 from './../imgs/panel_thumbnails/K-2.jpg'
import k3 from './../imgs/panel_thumbnails/K-3.jpg'

import l1 from './../imgs/panel_thumbnails/L-1.jpg'
import l2 from './../imgs/panel_thumbnails/L-2.jpg'
import l3 from './../imgs/panel_thumbnails/L-3.jpg'

import m1 from './../imgs/panel_thumbnails/M-1.jpg'
import m2 from './../imgs/panel_thumbnails/M-2.jpg'
import m3 from './../imgs/panel_thumbnails/M-3.jpg'

import n1 from './../imgs/panel_thumbnails/N-1.jpg'
import n2 from './../imgs/panel_thumbnails/N-2.jpg'
import n3 from './../imgs/panel_thumbnails/N-3.jpg'

import o1 from './../imgs/panel_thumbnails/O-1.jpg'
import o2 from './../imgs/panel_thumbnails/O-2.jpg'
import o3 from './../imgs/panel_thumbnails/O-3.jpg'

import p1 from './../imgs/panel_thumbnails/P-1.jpg'
import p2 from './../imgs/panel_thumbnails/P-2.jpg'
import p3 from './../imgs/panel_thumbnails/P-3.jpg'

import q1 from './../imgs/panel_thumbnails/Q-1.jpg'
import q2 from './../imgs/panel_thumbnails/Q-2.jpg'
import q3 from './../imgs/panel_thumbnails/Q-3.jpg'

import r1 from './../imgs/panel_thumbnails/R-1.jpg'
import r2 from './../imgs/panel_thumbnails/R-2.jpg'
import r3 from './../imgs/panel_thumbnails/R-3.jpg'

import s1 from './../imgs/panel_thumbnails/S-1.jpg'
import s2 from './../imgs/panel_thumbnails/S-2.jpg'
import s3 from './../imgs/panel_thumbnails/S-3.jpg'

import t1 from './../imgs/panel_thumbnails/T-1.jpg'
import t2 from './../imgs/panel_thumbnails/T-2.jpg'
import t3 from './../imgs/panel_thumbnails/T-3.jpg'

import u1 from './../imgs/panel_thumbnails/U-1.jpg'
import u2 from './../imgs/panel_thumbnails/U-2.jpg'
import u3 from './../imgs/panel_thumbnails/U-3.jpg'

import v1 from './../imgs/panel_thumbnails/V-1.jpg'
import v2 from './../imgs/panel_thumbnails/V-2.jpg'
import v3 from './../imgs/panel_thumbnails/V-3.jpg'

import w1 from './../imgs/panel_thumbnails/W-1.jpg'
import w2 from './../imgs/panel_thumbnails/W-2.jpg'
import w3 from './../imgs/panel_thumbnails/W-3.jpg'

import x1 from './../imgs/panel_thumbnails/X-1.jpg'
import x2 from './../imgs/panel_thumbnails/X-2.jpg'
import x3 from './../imgs/panel_thumbnails/X-3.jpg'

import y1 from './../imgs/panel_thumbnails/Y-1.jpg'
import y2 from './../imgs/panel_thumbnails/Y-2.jpg'
import y3 from './../imgs/panel_thumbnails/Y-3.jpg'

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
				<div className="image">
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
						<img src={c1} onClick={this.updateOverlay.bind(this, 'c1')}/>
						<img src={c2} onClick={this.updateOverlay.bind(this, 'c2')}/>
						<img src={c3} onClick={this.updateOverlay.bind(this, 'c3')}/>
					</div>
					<div>
						<img src={d1} onClick={this.updateOverlay.bind(this, 'd1')}/>
						<img src={d2} onClick={this.updateOverlay.bind(this, 'd2')}/>
						<img src={d3} onClick={this.updateOverlay.bind(this, 'd3')}/>
					</div>
					<div>
						<img src={e1} onClick={this.updateOverlay.bind(this, 'e1')}/>
						<img src={e2} onClick={this.updateOverlay.bind(this, 'e2')}/>
						<img src={e3} onClick={this.updateOverlay.bind(this, 'e3')}/>
					</div>
					<div>
						<img src={f1} onClick={this.updateOverlay.bind(this, 'f1')}/>
						<img src={f2} onClick={this.updateOverlay.bind(this, 'f2')}/>
						<img src={f3} onClick={this.updateOverlay.bind(this, 'f3')}/>
					</div>
					<div>
						<img src={g1} onClick={this.updateOverlay.bind(this, 'g1')}/>
						<img src={g2} onClick={this.updateOverlay.bind(this, 'g2')}/>
						<img src={g3} onClick={this.updateOverlay.bind(this, 'g3')}/>
					</div>
					<div>
						<img src={h1} onClick={this.updateOverlay.bind(this, 'h1')}/>
						<img src={h2} onClick={this.updateOverlay.bind(this, 'h2')}/>
						<img src={h3} onClick={this.updateOverlay.bind(this, 'h3')}/>
					</div>
					<div>
						<img src={i1} onClick={this.updateOverlay.bind(this, 'i1')}/>
						<img src={i2} onClick={this.updateOverlay.bind(this, 'i2')}/>
						<img src={i3} onClick={this.updateOverlay.bind(this, 'i3')}/>
					</div>
					<div>
						<img src={j1} onClick={this.updateOverlay.bind(this, 'j1')}/>
						<img src={j2} onClick={this.updateOverlay.bind(this, 'j2')}/>
						<img src={j3} onClick={this.updateOverlay.bind(this, 'j3')}/>
					</div>
					<div>
						<img src={k1} onClick={this.updateOverlay.bind(this, 'k1')}/>
						<img src={k2} onClick={this.updateOverlay.bind(this, 'k2')}/>
						<img src={k3} onClick={this.updateOverlay.bind(this, 'k3')}/>
					</div>
					<div>
						<img src={l1} onClick={this.updateOverlay.bind(this, 'l1')}/>
						<img src={l2} onClick={this.updateOverlay.bind(this, 'l2')}/>
						<img src={l3} onClick={this.updateOverlay.bind(this, 'l3')}/>
					</div>
					<div>
						<img src={m1} onClick={this.updateOverlay.bind(this, 'm1')}/>
						<img src={m2} onClick={this.updateOverlay.bind(this, 'm2')}/>
						<img src={m3} onClick={this.updateOverlay.bind(this, 'm3')}/>
					</div>
					<div>
						<img src={n1} onClick={this.updateOverlay.bind(this, 'n1')}/>
						<img src={n2} onClick={this.updateOverlay.bind(this, 'n2')}/>
						<img src={n3} onClick={this.updateOverlay.bind(this, 'n3')}/>
					</div>
					<div>
						<img src={o1} onClick={this.updateOverlay.bind(this, 'o1')}/>
						<img src={o2} onClick={this.updateOverlay.bind(this, 'o2')}/>
						<img src={o3} onClick={this.updateOverlay.bind(this, 'o3')}/>
					</div>
					<div>
						<img src={p1} onClick={this.updateOverlay.bind(this, 'p1')}/>
						<img src={p2} onClick={this.updateOverlay.bind(this, 'p2')}/>
						<img src={p3} onClick={this.updateOverlay.bind(this, 'p3')}/>
					</div>
					<div>
						<img src={q1} onClick={this.updateOverlay.bind(this, 'q1')}/>
						<img src={q2} onClick={this.updateOverlay.bind(this, 'q2')}/>
						<img src={q3} onClick={this.updateOverlay.bind(this, 'q3')}/>
					</div>
					<div>
						<img src={r1} onClick={this.updateOverlay.bind(this, 'r1')}/>
						<img src={r2} onClick={this.updateOverlay.bind(this, 'r2')}/>
						<img src={r3} onClick={this.updateOverlay.bind(this, 'r3')}/>
					</div>
					<div>
						<img src={s1} onClick={this.updateOverlay.bind(this, 's1')}/>
						<img src={s2} onClick={this.updateOverlay.bind(this, 's2')}/>
						<img src={s3} onClick={this.updateOverlay.bind(this, 's3')}/>
					</div>
					<div>
						<img src={t1} onClick={this.updateOverlay.bind(this, 't1')}/>
						<img src={t2} onClick={this.updateOverlay.bind(this, 't2')}/>
						<img src={t3} onClick={this.updateOverlay.bind(this, 't3')}/>
					</div>
					<div>
						<img src={u1} onClick={this.updateOverlay.bind(this, 'u1')}/>
						<img src={u2} onClick={this.updateOverlay.bind(this, 'u2')}/>
						<img src={u3} onClick={this.updateOverlay.bind(this, 'u3')}/>
					</div>
					<div>
						<img src={v1} onClick={this.updateOverlay.bind(this, 'v1')}/>
						<img src={v2} onClick={this.updateOverlay.bind(this, 'v2')}/>
						<img src={v3} onClick={this.updateOverlay.bind(this, 'v3')}/>
					</div>
					<div>
						<img src={w1} onClick={this.updateOverlay.bind(this, 'w1')}/>
						<img src={w2} onClick={this.updateOverlay.bind(this, 'w2')}/>
						<img src={w3} onClick={this.updateOverlay.bind(this, 'w3')}/>
					</div>
					<div>
						<img src={x1} onClick={this.updateOverlay.bind(this, 'x1')}/>
						<img src={x2} onClick={this.updateOverlay.bind(this, 'x2')}/>
						<img src={x3} onClick={this.updateOverlay.bind(this, 'x3')}/>
					</div>
					<div>
						<img src={y1} onClick={this.updateOverlay.bind(this, 'y1')}/>
						<img src={y2} onClick={this.updateOverlay.bind(this, 'y2')}/>
						<img src={y3} onClick={this.updateOverlay.bind(this, 'y3')}/>
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(Glass);
