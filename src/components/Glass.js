import React, { Component } from 'react';

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

require('!style!css!sass!./../sass/glass.scss');

class Glass extends Component {
	render() {
		return (
			<div className="glass">
				<div>
					<img src={b1}/>
					<img src={c1}/>
					<img src={d1}/>
					<img src={e1}/>
				</div>
			</div>
		)
	}
}

export default Glass;