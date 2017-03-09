import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';

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
							src='/thumbnails/A-1.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'a2')}
							src='/thumbnails/A-2.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'a3')}
							src='/thumbnails/A-3.jpg'
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'b1')}
							src='/thumbnails/B-1.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'b2')}
							src='/thumbnails/B-2.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'b3')}
							src='/thumbnails/B-3.jpg'
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'c1')}
							src='/thumbnails/C-1.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'c2')}
							src='/thumbnails/C-2.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'c3')}
							src='/thumbnails/C-3.jpg'
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'd1')}
							src='/thumbnails/D-1.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'd2')}
							src='/thumbnails/D-2.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'd3')}
							src='/thumbnails/D-3.jpg'
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'e1')}
							src='/thumbnails/E-1.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'e2')}
							src='/thumbnails/E-2.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'e3')}
							src='/thumbnails/E-3.jpg'
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'f1')}
							src='/thumbnails/F-1.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'f2')}
							src='/thumbnails/F-2.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'f3')}
							src='/thumbnails/F-3.jpg'
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'g1')}
							src='/thumbnails/G-1.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'g2')}
							src='/thumbnails/G-2.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'g3')}
							src='/thumbnails/G-3.jpg'
						/>
					</div>
					<div className={s.columns}>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'h1')}
							src='/thumbnails/H-1.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'h2')}
							src='/thumbnails/H-2.jpg'
						/>
						<img
							className={s.image}
							onClick={this.updateOverlay.bind(this, 'h3')}
							src='/thumbnails/H-3.jpg'
						/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/I-1.jpg'
							onClick={this.updateOverlay.bind(this, 'i1')}/>
						<img
							className={s.image}
							src='/thumbnails/I-2.jpg'
							onClick={this.updateOverlay.bind(this, 'i2')}/>
						<img
							className={s.image}
							src='/thumbnails/I-3.jpg'
							onClick={this.updateOverlay.bind(this, 'i3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/J-1.jpg'
							onClick={this.updateOverlay.bind(this, 'j1')}/>
						<img
							className={s.image}
							src='/thumbnails/J-2.jpg'
							onClick={this.updateOverlay.bind(this, 'j2')}/>
						<img
							className={s.image}
							src='/thumbnails/J-3.jpg'
							onClick={this.updateOverlay.bind(this, 'j3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/K-1.jpg'
							onClick={this.updateOverlay.bind(this, 'k1')}/>
						<img
							className={s.image}
							src='/thumbnails/K-2.jpg'
							onClick={this.updateOverlay.bind(this, 'k2')}/>
						<img
							className={s.image}
							src='/thumbnails/K-3.jpg'
							onClick={this.updateOverlay.bind(this, 'k3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/L-1.jpg'
							onClick={this.updateOverlay.bind(this, 'l1')}/>
						<img
							className={s.image}
							src='/thumbnails/L-2.jpg'
							onClick={this.updateOverlay.bind(this, 'l2')}/>
						<img
							className={s.image}
							src='/thumbnails/L-3.jpg'
							onClick={this.updateOverlay.bind(this, 'l3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/M-1.jpg'
							onClick={this.updateOverlay.bind(this, 'm1')}/>
						<img
							className={s.image}
							src='/thumbnails/M-2.jpg'
							onClick={this.updateOverlay.bind(this, 'm2')}/>
						<img
							className={s.image}
							src='/thumbnails/M-3.jpg'
							onClick={this.updateOverlay.bind(this, 'm3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/N-1.jpg'
							onClick={this.updateOverlay.bind(this, 'n1')}/>
						<img
							className={s.image}
							src='/thumbnails/N-2.jpg'
							onClick={this.updateOverlay.bind(this, 'n2')}/>
						<img
							className={s.image}
							src='/thumbnails/N-3.jpg'
							onClick={this.updateOverlay.bind(this, 'n3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/O-1.jpg'
							onClick={this.updateOverlay.bind(this, 'o1')}/>
						<img
							className={s.image}
							src='/thumbnails/O-2.jpg'
							onClick={this.updateOverlay.bind(this, 'o2')}/>
						<img
							className={s.image}
							src='/thumbnails/O-3.jpg'
							onClick={this.updateOverlay.bind(this, 'o3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/P-1.jpg'
							onClick={this.updateOverlay.bind(this, 'p1')}/>
						<img
							className={s.image}
							src='/thumbnails/P-2.jpg'
							onClick={this.updateOverlay.bind(this, 'p2')}/>
						<img
							className={s.image}
							src='/thumbnails/P-3.jpg'
							onClick={this.updateOverlay.bind(this, 'p3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/Q-1.jpg'
							onClick={this.updateOverlay.bind(this, 'q1')}/>
						<img
							className={s.image}
							src='/thumbnails/Q-2.jpg'
							onClick={this.updateOverlay.bind(this, 'q2')}/>
						<img
							className={s.image}
							src='/thumbnails/Q-3.jpg'
							onClick={this.updateOverlay.bind(this, 'q3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/R-1.jpg'
							onClick={this.updateOverlay.bind(this, 'r1')}/>
						<img
							className={s.image}
							src='/thumbnails/R-2.jpg'
							onClick={this.updateOverlay.bind(this, 'r2')}/>
						<img
							className={s.image}
							src='/thumbnails/R-3.jpg'
							onClick={this.updateOverlay.bind(this, 'r3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/S-1.jpg'
							onClick={this.updateOverlay.bind(this, 's1')}/>
						<img
							className={s.image}
							src='/thumbnails/S-2.jpg'
							onClick={this.updateOverlay.bind(this, 's2')}/>
						<img
							className={s.image}
							src='/thumbnails/S-3.jpg'
							onClick={this.updateOverlay.bind(this, 's3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/T-1.jpg'
							onClick={this.updateOverlay.bind(this, 't1')}/>
						<img
							className={s.image}
							src='/thumbnails/T-2.jpg'
							onClick={this.updateOverlay.bind(this, 't2')}/>
						<img
							className={s.image}
							src='/thumbnails/T-3.jpg'
							onClick={this.updateOverlay.bind(this, 't3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/U-1.jpg'
							onClick={this.updateOverlay.bind(this, 'u1')}/>
						<img
							className={s.image}
							src='/thumbnails/U-2.jpg'
							onClick={this.updateOverlay.bind(this, 'u2')}/>
						<img
							className={s.image}
							src='/thumbnails/U-3.jpg'
							onClick={this.updateOverlay.bind(this, 'u3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/V-1.jpg'
							onClick={this.updateOverlay.bind(this, 'v1')}/>
						<img
							className={s.image}
							src='/thumbnails/V-2.jpg'
							onClick={this.updateOverlay.bind(this, 'v2')}/>
						<img
							className={s.image}
							src='/thumbnails/V-3.jpg'
							onClick={this.updateOverlay.bind(this, 'v3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/W-1.jpg'
							onClick={this.updateOverlay.bind(this, 'w1')}/>
						<img
							className={s.image}
							src='/thumbnails/W-2.jpg'
							onClick={this.updateOverlay.bind(this, 'w2')}/>
						<img
							className={s.image}
							src='/thumbnails/W-3.jpg'
							onClick={this.updateOverlay.bind(this, 'w3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/X-1.jpg'
							onClick={this.updateOverlay.bind(this, 'x1')}/>
						<img
							className={s.image}
							src='/thumbnails/X-2.jpg'
							onClick={this.updateOverlay.bind(this, 'x2')}/>
						<img
							className={s.image}
							src='/thumbnails/X-3.jpg'
							onClick={this.updateOverlay.bind(this, 'x3')}/>
					</div>
					<div>
						<img
							className={s.image}
							src='/thumbnails/Y-1.jpg'
							onClick={this.updateOverlay.bind(this, 'y1')}/>
						<img
							className={s.image}
							src='/thumbnails/Y-2.jpg'
							onClick={this.updateOverlay.bind(this, 'y2')}/>
						<img
							className={s.image}
							src='/thumbnails/Y-3.jpg'
							onClick={this.updateOverlay.bind(this, 'y3')}/>
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(Glass);
