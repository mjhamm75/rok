import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';

import a1 from './../imgs/panel_thumbnails/A-1.jpg'
import a2 from './../imgs/panel_thumbnails/A-2.jpg'
import a3 from './../imgs/panel_thumbnails/A-3.jpg'
import a4 from './../imgs/panel_thumbnails/A-4.jpg'

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
					<div>
						<img
							className={s.image}
							src={i1}
							onClick={this.updateOverlay.bind(this, 'i1')}/>
						<img
							className={s.image}
							src={i2}
							onClick={this.updateOverlay.bind(this, 'i2')}/>
						<img
							className={s.image}
							src={i3}
							onClick={this.updateOverlay.bind(this, 'i3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={j1}
							onClick={this.updateOverlay.bind(this, 'j1')}/>
						<img
							className={s.image}
							src={j2}
							onClick={this.updateOverlay.bind(this, 'j2')}/>
						<img
							className={s.image}
							src={j3}
							onClick={this.updateOverlay.bind(this, 'j3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={k1}
							onClick={this.updateOverlay.bind(this, 'k1')}/>
						<img
							className={s.image}
							src={k2}
							onClick={this.updateOverlay.bind(this, 'k2')}/>
						<img
							className={s.image}
							src={k3}
							onClick={this.updateOverlay.bind(this, 'k3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={l1}
							onClick={this.updateOverlay.bind(this, 'l1')}/>
						<img
							className={s.image}
							src={l2}
							onClick={this.updateOverlay.bind(this, 'l2')}/>
						<img
							className={s.image}
							src={l3}
							onClick={this.updateOverlay.bind(this, 'l3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={m1}
							onClick={this.updateOverlay.bind(this, 'm1')}/>
						<img
							className={s.image}
							src={m2}
							onClick={this.updateOverlay.bind(this, 'm2')}/>
						<img
							className={s.image}
							src={m3}
							onClick={this.updateOverlay.bind(this, 'm3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={n1}
							onClick={this.updateOverlay.bind(this, 'n1')}/>
						<img
							className={s.image}
							src={n2}
							onClick={this.updateOverlay.bind(this, 'n2')}/>
						<img
							className={s.image}
							src={n3}
							onClick={this.updateOverlay.bind(this, 'n3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={o1}
							onClick={this.updateOverlay.bind(this, 'o1')}/>
						<img
							className={s.image}
							src={o2}
							onClick={this.updateOverlay.bind(this, 'o2')}/>
						<img
							className={s.image}
							src={o3}
							onClick={this.updateOverlay.bind(this, 'o3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={p1}
							onClick={this.updateOverlay.bind(this, 'p1')}/>
						<img
							className={s.image}
							src={p2}
							onClick={this.updateOverlay.bind(this, 'p2')}/>
						<img
							className={s.image}
							src={p3}
							onClick={this.updateOverlay.bind(this, 'p3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={q1}
							onClick={this.updateOverlay.bind(this, 'q1')}/>
						<img
							className={s.image}
							src={q2}
							onClick={this.updateOverlay.bind(this, 'q2')}/>
						<img
							className={s.image}
							src={q3}
							onClick={this.updateOverlay.bind(this, 'q3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={r1}
							onClick={this.updateOverlay.bind(this, 'r1')}/>
						<img
							className={s.image}
							src={r2}
							onClick={this.updateOverlay.bind(this, 'r2')}/>
						<img
							className={s.image}
							src={r3}
							onClick={this.updateOverlay.bind(this, 'r3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={s1}
							onClick={this.updateOverlay.bind(this, 's1')}/>
						<img
							className={s.image}
							src={s2}
							onClick={this.updateOverlay.bind(this, 's2')}/>
						<img
							className={s.image}
							src={s3}
							onClick={this.updateOverlay.bind(this, 's3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={t1}
							onClick={this.updateOverlay.bind(this, 't1')}/>
						<img
							className={s.image}
							src={t2}
							onClick={this.updateOverlay.bind(this, 't2')}/>
						<img
							className={s.image}
							src={t3}
							onClick={this.updateOverlay.bind(this, 't3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={u1}
							onClick={this.updateOverlay.bind(this, 'u1')}/>
						<img
							className={s.image}
							src={u2}
							onClick={this.updateOverlay.bind(this, 'u2')}/>
						<img
							className={s.image}
							src={u3}
							onClick={this.updateOverlay.bind(this, 'u3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={v1}
							onClick={this.updateOverlay.bind(this, 'v1')}/>
						<img
							className={s.image}
							src={v2}
							onClick={this.updateOverlay.bind(this, 'v2')}/>
						<img
							className={s.image}
							src={v3}
							onClick={this.updateOverlay.bind(this, 'v3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={w1}
							onClick={this.updateOverlay.bind(this, 'w1')}/>
						<img
							className={s.image}
							src={w2}
							onClick={this.updateOverlay.bind(this, 'w2')}/>
						<img
							className={s.image}
							src={w3}
							onClick={this.updateOverlay.bind(this, 'w3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={x1}
							onClick={this.updateOverlay.bind(this, 'x1')}/>
						<img
							className={s.image}
							src={x2}
							onClick={this.updateOverlay.bind(this, 'x2')}/>
						<img
							className={s.image}
							src={x3}
							onClick={this.updateOverlay.bind(this, 'x3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src={y1}
							onClick={this.updateOverlay.bind(this, 'y1')}/>
						<img
							className={s.image}
							src={y2}
							onClick={this.updateOverlay.bind(this, 'y2')}/>
						<img
							className={s.image}
							src={y3}
							onClick={this.updateOverlay.bind(this, 'y3')}/>
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(Glass);
