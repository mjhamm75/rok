import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';
import Copywrite from './Copywrite';

let rokLogo = require('./../imgs/rok-logo.png');
let rokTitle = require('./../imgs/rok-title.png');

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

require('!style!css!sass!./../sass/home.scss');

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			spacer: false
		}
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
		if(window.innerWidth > 992) {
			window.addEventListener('scroll', this.handleScroll);			
		}
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		if(window.scrollY >= 596) {
			this.setState({
				spacer: true
			})
		} else {
			this.setState({
				spacer: false
			})
		}
	}
	render() {
		var style = this.state.spacer ? {
			marginTop: '45px'
		} : null;
		return (
			<div className="home">
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
									<div className="text">The Roots of Knowledge art glass window showcases humanity's pursuit of knowledge since the dawn of recorded time.  The documentary will transform the window into a live rendition of the journey of knowledge and will act as a megaphone to spread the message of the masterpiece to the world.</div>
									<Link to="donations">Sponsor a piece of glass</Link>
								</div>
							</div>
						</div>
			    	</div>
			    	<div className="link">
			    		<Link to="simply-donate">OR SIMPLY DONATE</Link>
			    	</div>
				</div>
				<Nav />
				<div className="storyWrapper" style={style}>
					<div className="story">
						<div>Man's story told through the beauty of stained glass</div>
						<div>
							<div className="hide"></div>
							<div className="grow left">
								<div>IGNITING THE FIRE</div>
								<div>The Roots of Knowledge, created in stained glass, uses extraordinary imagery to depicts humanity’s contributions to knowledge throughout recorded history. See the wall</div>
							</div>
							<div className="grow right">
								<div>A NEW WAY TO LEARN</div>
								<div>The artglass window and documentary series will inspire viewers the world over as the lessons of the past will, hopefully, inspire each of us to make a better future. Watch now</div>
							</div>
							<div className="hide"></div>
						</div>
					</div>
				</div>
				<div className="factsTitle">ROOTS OF KNOWLEDGE FACTS</div>
				<div className="facts">
					<div>
						<div>
							<div>80,000</div>
							<div>pieces of glass used to create 80 panels in the UVU Library.  Actual rock, fossils, coins, meteorite, and ivory are in the window as well.</div>
						</div>
						<div>
							<div>250</div>
							<div>UVU students have already participated in various elements of the Roots of Knowledge project.</div>
						</div>
					</div>
					<div>
						<div>
							<div>2400</div>
							<div>pieces of glass were used to make the Alexander & Bucephalus Mosaic.</div>
						</div>
						<div>
							<div>$1.5 Million</div>
							<div>has already been donated to the project by individually sponsored pieces of glass and donations.</div>
						</div>
					</div>
				</div>
				<div className="groupimage">
					<div className="grouphero">
						<div className="hero">
							<div>Building the Window</div>
							<div>
								<div>Measuring an immense 10' by 200' in length, totaling eighty panels, this art glass will impact viewers through illustrating intimate moments of time on a grand scale.</div>
							</div>
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
					<div className="iphonehide right5">
						<img src={c1r1} />
						<img src={c1r2} className="top5"/>
					</div>
					<div className="ipadhide right5">
						<img src={c2r1} />
						<img src={c2r2} className="top5" />
					</div>
					<div className="hero right5">
						<img src={c3r1} />
						<div>
							<div>Add your piece to the story.</div>
							<Link to="donate">Sponsor a piece of glass</Link>
						</div>
						<img src={c3r2} />
					</div>
					<div className="ipadhide right5">
						<img src={c4r1} />
						<img src={c4r2} className="top5" />
					</div>
					<div className="iphonehide">
						<img src={c5r1} />
						<img src={c5r2} className="top5" />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
export default Home;