import React, { Component } from 'react';
import Sticky from 'react-sticky';
require('!style!css!sass!./../sass/app.scss');


let hand = require('./../imgs/hand.png');

class Home extends Component {
	render() {
		return (
			<div>
				<div className="navimage"></div>
				<div className="navhero-container">
					<div className="navhero">
						<div>
							
						</div>
						<div>
							
						</div>
						<div>
							<div>The Roots of Knowledge art glass window showcases humanitys pursuit of knowledge since the dawn of recorded time.  The documentary will transform the window into a live rendition of the journey of knowledge and will act as a megaphone to spread the message of the masterpiece to the world.</div>
							<button>Sponser a piece of glass</button>
						</div>
					</div>
				</div>
				<Sticky>
					<div className="navbar">
						<div>
							<a>Invisible</a>
						</div>
						<div>
							<a href="/">The Roots of Knowledge Project</a>
						</div>
						<div>
							<a href="/about">About the Project</a>
						</div>
						<div>
							<a href="/donations">Donate</a>
						</div>
						<div>
							<a href="/contact">Contact Us</a>
						</div>
						<div>
							<a href="#">mailbox</a>
						</div>
					</div>
				</Sticky>
			</div>
		)
	}
}

export default Home;