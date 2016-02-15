import React, { Component } from 'react';
import { Link } from 'react-router';
import Sticky from 'react-sticky';
import Nav from './Nav';
let hand = require('./../imgs/hand.png');
let rokLogo = require('./../imgs/rok-logo.png');
let rokTitle = require('./../imgs/rok-title.png');
let glass = require('./../imgs/desktop.stainedglass.png');
let twitter = require('./../imgs/twitter.png');
let facebook = require('./../imgs/facebook.png');
let pinterest = require('./../imgs/pinterest.png');

let c1r1 = require('./../imgs/col1-1.png');
let c1r2 = require('./../imgs/col1-2.png');
let c2r1 = require('./../imgs/col2-1.png');
let c2r2 = require('./../imgs/col2-2.png');
let c3r1 = require('./../imgs/col3-1.png');
let c3r2 = require('./../imgs/col3-2.png');
let c4r1 = require('./../imgs/col4-1.png');
let c4r2 = require('./../imgs/col4-2.png');
let c5r1 = require('./../imgs/col5-1.png');
let c5r2 = require('./../imgs/col5-2.png');

require('!style!css!sass!./../sass/app.scss');

class Home extends Component {
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
				<Nav />
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
						<div className="hero">
							<div>Building the Window</div>
							<div>Measuring an immense 10' by 200' in length, totaling eighty panels, this art glass will impact viewers through illustrating intimate moments of time on a grand scale.</div>
							<div>
								<a>Watch the documentary</a>
							</div>
						</div>
					</div>
				</div>
				<div className="quote">
					<div>“This is a project that I believe will set the world aflame, and the world will come to see this. We have got to make this happen. This is to be a central part of the University.”</div>
					<div>UVU President Matthew Holland</div>
				</div>
				<div className="addpiece">
					<div className="right5">
						<img src={c1r1} />
						<img src={c1r2} className="top5"/>
					</div>
					<div className="right5">
						<img src={c2r1} />
						<img src={c2r2} className="top5" />
					</div>
					<div className="hero right5">
						<img src={c3r1} />
						<div>
							<div>Add your piece to the story.</div>
							<a href="donate">Sponsor a piece of glass</a>
						</div>
						<img src={c3r2} />
					</div>
					<div className="right5">
						<img src={c4r1} />
						<img src={c4r2} className="top5" />
					</div>
					<div>
						<img src={c5r1} />
						<img src={c5r2} className="top5" />
					</div>
				</div>
				<div className="footer">
					<div>
						<div>
							Contact Us:
							<br />
							1-801-766-4111
						</div>
						<div>
							3001 N Thanksgiving Way
							<br />
							Lehi, UT 84043
						</div>
					</div>
					<div>
						<div>
							<Link to="about">About Us</Link>
						</div>
						<div>
							<Link to="artists">Meet the Artists</Link>
						</div>
						<div>
							<Link to="university">Utah Valley University</Link>
						</div>
						<div>
							<Link to="donate">Donate</Link>
						</div>
					</div>
					<div>
						<div>
							<img src={twitter}/>
							<Link to="twitter">Twitter</Link>
						</div>
						<div>
							<img src={facebook}/>
							<Link to="facebook">Facebook</Link>
						</div>
						<div>
							<img src={pinterest}/>
							<Link to="pinterest">Pinterest</Link>
						</div>
					</div>
				</div>
				<div className="copywrite">
					© 2016 Roots Media, LLC, & Holdman Studios, LLC, All Rights Reserved.
				</div>
			</div>
		)
	}
}

export default Home;