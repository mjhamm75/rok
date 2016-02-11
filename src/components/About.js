import React, { Component } from 'react';
let hand = require('./../imgs/hand.png');
let rokLogo = require('./../imgs/rok-logo.png');
let rokTitle = require('./../imgs/rok-title.png');
require('!style!css!sass!./../sass/app.scss');

class About extends Component {
	render() {
		return (
			<div className="navimage">
				<div className="navhero">
					<div className="heroflex"> 
						<div>
							<img src={rokLogo} />
						</div>
						<div>
							<img src={rokTitle} />
						</div>
						<div>
							<div>
								<div className="text">The Roots of Knowledge art glass window showcases humanitys pursuit of knowledge since the dawn of recorded time.  The documentary will transform the window into a live rendition of the journey of knowledge and will act as a megaphone to spread the message of the masterpiece to the world.</div>
								<button>Sponser a piece of glass</button>
							</div>
						</div>
					</div>
		    	</div>
			</div>
		)
	}
}

export default About;