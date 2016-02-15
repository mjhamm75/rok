import React, { Component } from 'react';
import Sticky from 'react-sticky';
let hand = require('./../imgs/hand.png');
let rokLogo = require('./../imgs/rok-logo.png');
let rokTitle = require('./../imgs/rok-title.png');
let glass = require('./../imgs/desktop.stainedglass.png');
require('!style!css!sass!./../sass/app.scss');

class About extends Component {
	render() {
		return (
			<div>
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
									<a href="/donations">Sponser a piece of glass</a>
								</div>
							</div>
						</div>
			    	</div>
			    	<div className="link">
			    		<a>OR SIMPLY DONATE</a>
			    	</div>
				</div>
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
				<div className="story">
					<div>
						<div>
						</div>
					</div>
				</div>
				<div className="facts">
					<div>
						<div>80,000</div>
						<div>pieces of glass used to create 80 panels in the UVU Library.  Actual rock, fossils, coins, meteorite, and ivory are in the window as well.</div>
					</div>
					<div>
						<div>250</div>
						<div>UVU students have already participated in various elements of the Roots of Knowledge project.</div>
					</div>
					<div>
						<div>2400</div>
						<div>pieces of glass were used to make the Alexander & Bucephalus Mosaic.</div>
					</div>
					<div>
						<div>$1.5 Million</div>
						<div>has already been donated to the project by individually sponsered pieces of glass and donations.</div>
					</div>
				</div>
				<div className="groupimage">
					<div className="grouphero">

					</div>
				</div>
			</div>
		)
	}
}

export default About;