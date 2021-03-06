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
									<div className={s.heroBlurb}>Sponsor a piece of the window to help fund this educational documentary.  Help take the message of UVU and the Roots of Knowledge to the world.</div>
									<Link
										className={s.sponsorButton}
										to="donations"
									>Donate now</Link>
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
				<Nav fixed="true"/>
				<div className={s.bullets}>
					<div className={s.bullet}>
						<div className={s.bulletTitle}>
							ART GLASS UNVEILED
						</div>
						<div className={s.bulletBody}>
							The Roots of Knowledge was unveiled at Utah Valley University on November 18, 2016.  The 10' x 200' masterpiece is a stained glass portrait of humanity's pursuit of knowledge since the dawn of recorded time. Successful fundraising efforts have been ongoing for the past few years to complete the funding for the window, ongoing ROK costs at UVU and a mobile app.
						</div>
					</div>
					<div className={s.bullet}>
						<div className={s.bulletTitle}>
							FUNDING THE DOCUMENTARY
						</div>
						<div className={s.bulletBody}>
							Now it is time, to fund the Roots of Knowledge documentary film series that will extend the considerable potential for global educational outreach of this monumental work of art.  The documentary will act as a megaphone to spread the message of the masterpiece to teh world and bring people to the Marc and Deborah Bingham Gallery located in the Fulton Library.
						</div>
					</div>
					<div className={s.bullet}>
						<div className={s.bulletTitle}>
							EDUCATIONAL TOOL
						</div>
						<div className={s.bulletBody}>
							In addition to telling the story of the window to the world, the documentary will provide significant educational resources supporting the development of social studies, science, math, language and fund arts curriculum.  Video clips from the documentary will be added to the Utah Education and Telehealth Network online library to further support development of teacher resources.
						</div>
					</div>
				</div>
				<div className={s.storyWrapper}>
					<div className={s.story}>
						<div className={s.storyH1}>Man's story told through the beauty of stained glass</div>
						<div className={s.storyMain}>
							<div className={s.hide}></div>
							<div className={s.growLeft}>
								<div className={s.storyHeader}>IGNITING THE FIRE</div>
								<div className={s.storyContent}>The Roots of Knowledge, created in stained glass, uses extraordinary imagery to depict humanity’s contributions to knowledge throughout recorded history. <Link to="donations" className={s.link}>Watch now</Link></div>
							</div>
							<div className={s.growRight}>
								<div className={s.storyHeader}>A NEW WAY TO LEARN</div>
								<div className={s.storyContent}>The documentary is an unparalleled opportunity to share the educational significance of "Roots of Knowledge."  Unless we do something to take the message to the world, this amazing artwork will remain virtually undiscovered!.  <a className={s.link} href="https://vimeo.com/123640824">Help sponsor the film</a></div>
							</div>
							<div className={s.hide}></div>
						</div>
					</div>
				</div>
				<div className={s.factsTitle}>ROOTS OF KNOWLEDGE FACTS</div>
				<div className={s.facts}>
					<div className={s.factColumn}>
						<div className={s.fact}>
							<div className={s.factTitle}>4,000+</div>
							<div className={s.factContent}>The app being developed will help visitors understand the 4000+ elements in the window!</div>
						</div>
						<div className={s.fact}>
							<div className={s.factTitle}>14,500</div>
							<div className={s.factContent}>Over 14,500 (2.77 miles) of lead was used in the window!</div>
						</div>
					</div>
					<div className={s.factColumn}>
						<div className={s.fact}>
							<div className={s.factTitle}>2600</div>
							<div className={s.factContent}>2,600+ pieces of glass were used to complete Alexander& Bucephalus.  This mosaic was created with copper foil instead of lead.</div>
						</div>
						<div className={s.fact}>
							<div className={s.factTitle}>Real Fossils</div>
							<div className={s.factContent}>rock, coins, paper money, meteorite, ivory, antler, a shark's tooth and arrowheads are all included in the window.</div>
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
								>Watch the documentary</a>
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
						<img style={{marginTop: '45px'}} src={c3r2} className={s.addPieceImage}/>
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
