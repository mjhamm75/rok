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

import s from './Home.css';

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
			<div className={s.home}>
				<div className={s.navImage}>
					<div className={s.navHero}>
						<div className={s.heroFlex}>
							<div className={s.heroLogo}>
								<img src={rokLogo} />
							</div>
							<div className={s.heroTitle}>
								<img src={rokTitle} />
							</div>
							<div className={s.heroWrapper}>
								<div className={s.heroContainer}>
									<div className={s.heroBlurb}>The Roots of Knowledge art glass window showcases humanity's pursuit of knowledge since the dawn of recorded time.  The documentary will transform the window into a live rendition of the journey of knowledge and will act as a megaphone to spread the message of the masterpiece to the world.</div>
									<Link
										className={s.sponsorButton}
										to="donations"
									>Sponsor a piece of glass</Link>
								</div>
							</div>
						</div>
			    	</div>
			    	<div>
			    		<Link
								className={s.simplyDonate}
								to="simply-donate">OR SIMPLY DONATE</Link>
			    	</div>
				</div>
				<Nav />
				<div className={s.storyWrapper} style={style}>
					<div className={s.story}>
						<div className={s.storyH1}>Man's story told through the beauty of stained glass</div>
						<div className={s.storyMain}>
							<div className={s.hide}></div>
							<div className={s.growLeft}>
								<div className={s.storyHeader}>IGNITING THE FIRE</div>
								<div className={s.storyContent}>The Roots of Knowledge, created in stained glass, uses extraordinary imagery to depict humanity’s contributions to knowledge throughout recorded history. <Link to="donations">See the wall</Link></div>
							</div>
							<div className={s.growRight}>
								<div className={s.storyHeader}>A NEW WAY TO LEARN</div>
								<div className={s.storyContent}>The artglass window and documentary series will inspire viewers the world over as the lessons of the past will, hopefully, inspire each of us to make a better future. <a href="https://vimeo.com/123640824">Watch now</a></div>
							</div>
							<div className={s.hide}></div>
						</div>
					</div>
				</div>
				<div className={s.factsTitle}>ROOTS OF KNOWLEDGE FACTS</div>
				<div className={s.facts}>
					<div className={s.factColumn}>
						<div className={s.fact}>
							<div className={s.factTitle}>60,000+</div>
							<div className={s.factContent}>pieces of glass used to create 80 panels in the UVU Library.  Actual rock, fossils, coins, meteorite, and ivory are in the window as well.</div>
						</div>
						<div className={s.fact}>
							<div className={s.factTitle}>300+</div>
							<div className={s.factContent}>UVU students have already participated in various elements of the Roots of Knowledge project.</div>
						</div>
					</div>
					<div className={s.factColumn}>
						<div className={s.fact}>
							<div className={s.factTitle}>2400+</div>
							<div className={s.factContent}>pieces of glass were used to make the Alexander & Bucephalus Mosaic.</div>
						</div>
						<div className={s.fact}>
							<div className={s.factTitle}>$1.5 Million</div>
							<div className={s.factContent}>has already been donated to the project by individually sponsored pieces of glass and donations.</div>
						</div>
					</div>
				</div>
				<div className={s.groupImage}>
					<div className={s.groupHero}>
						<div className={s.hero}>
							<div className={s.groupTitle}>Building the Window</div>
							<div className={s.groupContent}>
								<div>Measuring an immense 10' by 200' in length, totaling eighty panels, this art glass will impact viewers through illustrating intimate moments of time on a grand scale.</div>
							</div>
							<div className={s.groupLinkWrapper}>
								<a
									className={s.groupLink}
									href="https://vimeo.com/123640824"
								>Watch now</a>
							</div>
						</div>
					</div>
				</div>
				<div className={s.quoteWrapper}>
					<div className={s.quote}>“This is a project that I believe will set the world aflame, and the world will come to see this. We have got to make this happen. This is to be a central part of the University.”</div>
					<div className={s.quotee}>UVU President Matthew Holland</div>
				</div>
				<div className={s.addPiece}>
					<div className={s.iphone}>
						<img src={c1r1} className={s.addPieceImage}/>
						<img src={c1r2} className={s.top5}/>
					</div>
					<div className={s.ipad}>
						<img src={c2r1} className={s.addPieceImage}/>
						<img src={c2r2} className={s.top5} />
					</div>
					<div className={s.addPieceHero}>
						<img src={c3r1} className={s.addPieceImage}/>
						<div className={s.addPieceHeroContent}>
							<div className={s.addPieceHeroTitle}>Add your piece to the story.</div>
							<Link
								className={s.bottomSponsorButton}
								to="donations"
							>Sponsor a piece of glass</Link>
						</div>
						<img src={c3r2} className={s.addPieceImage}/>
					</div>
					<div className={s.ipad}>
						<img src={c4r1} className={s.addPieceImage}/>
						<img src={c4r2} className={s.top5} />
					</div>
					<div className={s.iphonehide}>
						<img src={c5r1} className={s.addPieceImage}/>
						<img src={c5r2} className={s.top5} />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
export default Home;
