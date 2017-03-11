import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Copywrite from './Copywrite';
import Footer from './Footer';
import classnames from 'classnames';

let library = require('./../imgs/library.png');
let libraryExt = require('./../imgs/library-exterior.png');
let holdmanStudios = require('./../imgs/holdman-studios.png');
let tholdman = require('./../imgs/tholdman.png');
let coscarson = require('./../imgs/coscarson.png');
let washington = require('./../imgs/washington.png');
let lgroberg = require('./../imgs/lgroberg.png');
let rwoffley = require('./../imgs/rwoffley.png');
let holdmanIcon = require('./../imgs/holdman-icon.png');
let uvuIcon = require('./../imgs/uvu-icon.png');
let rootsMediaIcon = require('./../imgs/roots-media-icon.png');

require('!style!css!sass!./../styles/materialize/sass/materialize.scss');

import s from './About.css';

class About extends Component {
	componentDidMount() {
		this.scrollToHash(window.location.hash.substr(1));
	}

	componentWillReceiveProps() {
		this.scrollToHash(window.location.hash.substr(1));
	}

	scrollToHash(hash) {
		setTimeout(() => {
			if (hash) {
				let anchorName = hash.replace("#","");
				let anchorElement = document.getElementById(anchorName);
				let offset = anchorElement.offsetTop;

				if(anchorElement) {
					window.scrollTo(0, offset);
				}
			}
		}, 250);
	}

	render() {
		let headerClass = classnames();
		return (
			<div className={s.about}>
				<Nav fixed="true"/>
				<div className="container">
					<div className="row">
						<div className="col l8 offset-l2">
							<h1 className={s.title}>About The Roots of Knowledge Project</h1>
						</div>
					</div>
					<div className="row">
						<div className="col l10 offset-l2">
							<div className="defer-image image-ratio:16x9">
								<img className={s.library} src={library} />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col l8 offset-l2">
							The Roots of Knowledge art glass window showcases humanity’s pursuit of knowledge since the dawn of recorded time. The influence these advancements have on our present day quest for knowledge reminds us that we too, can impact the learning process of future generations.
						</div>
			    </div>
			    <div className="row">
						<div className="col l8 offset-l2">
							This stained glass masterpiece not only serves as a stunning piece of art, but a tangible reminder that as a human race, we are undeniably connected. Each piece of glass is individually crafted and plays a vital role in the overall wonder of the window just as each person, no matter how insignificant they feel, adds beauty and purpose to this world.
						</div>
			    </div>
			    <div className="row">
						<div className="col l8 offset-l2">
							Using digital technology, UVU visitors will be immersed in an interactive experience with the window through the ROK App.  This downloadable application will be available for iOS and Android handheld electronic devices and personal computers.
						</div>
			    </div>
			    <div className="row">
						<div className="col l8 offset-l2">
							The PBS/BBC documentary, directed by Lee Groberg, will ransform the window into a live rendition of the journey of knowledge and will spread the message of this masterpiece beyond Utah Valley to the world.  In addition to the complete documentary, individual video clips from the documentary will be used throughout the App.  Video clips will be added to UETN's online library, which already hosts more than 19,000 learning objects including the film of Ken Burns.  These ROK video clips will be invaluable in the development of teacher resources.
						</div>
			    </div>
					<div className={s.space}></div>
			    <div id="uvu" className="row">
			    	<div className="col l6 offset-l2">
			    		<span className={s.header}>Utah Valley University</span>
			    	</div>
			    </div>
					<div className="row">
				    	<div className="col l6 offset-l2">
				    		UVU became home to the Roots of Knowledge on 18 November 2016.  This masterpiece was unveiled as the culminating event of the 75th anniversary of the University.  Click here to view the unveiling.
				    	</div>
				    </div>
					<div className="row">
						<div className="col l6 offset-l2">
							<div className="defer-image image-ratio:16x9">
								<img src={libraryExt} />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col l6 offset-l2">
							<span className={s.header}>Roots Media</span>
						</div>
					</div>
					<div className="row">
						<div className="col l6 offset-l2">
							The Roots of Knowledge documentary film series intrigues us because of its message.  It is a unique opportunity to celebrate man's contributions to the knowledge of mankind and to acknowledge the reasons for these amazing accomplishments.  We are excited that the film series will provide an amazing educational opportunity for students, teachers, and anyone interested in history.  We applaud Utah Valley University for hosting this permanent world class exhibition and for leading the way in creative innovations in learning.  Watch now
						</div>
					</div>
					<div className="row">
						<div className="col l6 offset-l2">
							<img src={washington} />
						</div>
					</div>
					<div className="row">
						<div className="col l2">
							<img src={lgroberg} />
						</div>
						<div className="col l6">
							<span className={s.bold}>Lee B. Groberg</span>: Executive producer and president, Roots Media, LLC
							<br />
Lee has produced award-winning documentary films for 30 years.  His broadcast venues include PBS Television, the History Channel, BYU Broadcasting, America Public Television and a number of foreign networks through syndication of his documentary films.
							<br />
							<br />
His film awards include a bunch: George Washington Honor Medal; Freedoms Foundation at Valley Forge (twice), Cine Golden Eagle, new York Film Festival, Special Jury Remi Award; Worldfest Houston, Certificate of Creative Excellence; U.S. international Film Festival, Platinum Remi; Houston international Film Festival, Platinum Best of Show; First Place Silver Telly; First Place; Houston International Film Festival, First Place; Telly Awards, Gold Camera; U.S. International Film and Festival, New York, First place: U.S. International Film Festival and many more.
						</div>
					</div>
					<div className="row">
						<div className="col l2">
							<img src={rwoffley} />
						</div>
						<div className="col l6">
							<span className={s.bold}>Ross S. Wolfley</span>: COO – Corporate Counsel, Roots Media
							<br />
For the past 25+ years, Ross has served as COO and Corporate Counsel in the media and high tech industry. For the past four years, Ross has been an integral member of the Roots of Knowledge team helping to ensure the timley completion and installation of the window wall.  He is committed to helping take the message of the Roots of Knowledge to the world
							<br/>
							<br/>
Ross is an active member of the Utah State Bar, having received his Juris Doctorate from J. Reuben Clark Law School where he graduated Cum Laude. Ross served eight years in the United States Air Force and a T-37 instructor pilot and NATO F-111f fighter and instructor pilot.
						</div>
					</div>
					<div id="artists" className="row">
						<div className="col l6 offset-l2">
							<span className={s.header}>Holdman Studios</span>
						</div>
					</div>
					<div className="row">
						<div className="col l6 offset-l2">
							Tom Holdman and fellow artist, Cameron Oscarson are creating an art glass masterpiece. No matter what language an individual may speak, this beautiful artwork ignites the fire of the individual’s heart through the “language of art.” <Link to="donations">See the Wall</Link>
						</div>
					</div>
					<div className="row">
						<div className="col l6 offset-l2">
							<div className="defer-image image-ratio:16x9">
								<img src={holdmanStudios} />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col l2">
							<img src={tholdman} />
						</div>
						<div className="col l6">
							<span className={s.bold}>Thomas E. Holdman</span>: Stained Glass Artist, Holdman Studios CEO
							<br />
As an aspiring artist, Tom Holdman started Holdman Studios in 1988 in his parents’ garage. He has since created stained glass displayed in all 50 states and worldwide for commercial buildings, private residences, and public art features. Tom’s creations are also found in many religious institutions including 40 LDS temples, and Catholic and Protestant Sanctuaries. Mr. Holdman is the recipient of The Best of State Statue Award, the Governor’s Visual Artist Award, the Star award, etc. He and his art have been featured in the LDS Ensign Magazine, USA Today and the New York Times. He also founded The Art Institute at Thanksgiving Point.
						</div>
					</div>
					<div className="row">
						<div className="col l2">
							<img src={coscarson} />
						</div>
						<div className="col l6">
							<span className={s.bold}>R. Cameron Oscarson</span>: Head Artist, Holdman Studios
							<br />
Cameron Oscarson, also a native of Utah, developed his skills as an artist at a young age and attended Dixie State College on scholarship, then Brigham Young University, receiving a BFA with an emphasis in painting and drawing. He joined Holdman Studios in 2003 and his natural artistic talent has been invaluable to the studios’ accomplishments and projects, including “Roots of Knowledge.” As an award-winning artist himself, Mr. Oscarson has worked on many of his own creative endeavors, including illustrations for children’s books and other commissioned works.
						</div>
					</div>
				</div>
				<div className={s.icons}>
					<a
						className={s.icon}
						href="http://holdmanstudios.com/"
						target="_blank"
					>
						<img src={holdmanIcon} />
					</a>
					<a
						className={s.icon}
						href="http://www.uvu.edu/oel/rootsofknowledge.html"
						target="_blank"
					>
						<img src={uvuIcon} />
					</a>
					<a
						className={s.icon}
						href="http://grobergfilms.com"
						target="_blank"
					>
						<img src={rootsMediaIcon} />
					</a>
				</div>
				<div className={s.tagline}>Join in building the masterpiece of a lifetime.</div>
				<Link className={s.button} to="donations">Sponsor a piece of glass</Link>
				<Footer />
			</div>
		)
	}
}

export default About;
