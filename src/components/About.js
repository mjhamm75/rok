import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

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

require('!style!css!sass!./../sass/about.scss');
require('!style!css!sass!./../sass/materialize/sass/materialize.scss');

class About extends Component {
	render() {
		return (
			<div className="about">
				<Nav />
				<h1>About The Roots of Knowledge Project</h1>
				<div className="container">
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
							The development and completion of the project is enhanced by the collaborative efforts of Tom Holdman, his fellow artists at Holdman Studios, Roots Media, and educators and students at Utah Valley University. The interactive mobile app will spark the yearning for knowledge of the patrons who come to view the art glass window in person. The PBS/BBC documentary, directed by Lee Groberg, transforms the window into a live rendition of the journey of knowledge and acts as a megaphone to spread the message of this masterpiece beyond Utah Valley to the world.
						</div>
				    </div>
				    <div className="row">
						<div className="col l8 offset-l2">
							As individuals from all different backgrounds behold this sophisticated work of art, they will feel connected to the past, be inspired to reach their own amazing potential in the present, and become committed to shape the world’s future.
						</div>
				    </div>
				    <div className="row">
				    	<div className="col l10 offset-l2">
				    		<img src={library} />
				    	</div>
				    </div>
				    <div className="row">
				    	<div className="col l8 offset-l2 header">
				    		Utah Valley University
				    	</div>
				    </div>
					<div className="row">
				    	<div className="col l8 offset-l2">
				    		UVU is set to become the largest university in the State of Utah with over 37,000 enrolled students and 1,800,000 alumni. UVU will educate through its “Roots of Knowledge” curriculum as well be home to this magnificent piece of art. This will fan the fire in the hearts of tens of thousands, both student and the public.
				    	</div>
				    </div>
					<div className="row">
						<div className="col l8 offset-l2">
							<img src={libraryExt} />
						</div>
					</div>
					<div className="row">
						<div className="col l8 offset-l2 header">
							Holdman Studios
						</div>
					</div>
					<div className="row">
						<div className="col l8 offset-l2">
							Tom Holdman and fellow artist, Cameron Oscarson are creating an art glass masterpiece. No matter what language an individual may speak, this beautiful artwork ignites the fire of the individual’s heart through the “language of art.” See the Wall
						</div>
					</div>
					<div className="row">
						<div className="col l8 offset-l2">
							<img src={holdmanStudios} />
						</div>
					</div>
					<div className="row">
						<div className="col l2">
							<img src={tholdman} />
						</div>
						<div className="col l8">
							<span className="bold">Thomas E. Holdman</span>: Stained Glass Artist, Holdman Studios CEO
As an aspiring artist, Tom Holdman started Holdman Studios in 1988 in his parents’ garage. He has since created stained glass displayed in all 50 states and worldwide for commercial buildings, private residences, and public art features. Tom’s creations are also found in many religious institutions including 40 LDS temples, and Catholic and Protestant Sanctuaries. Mr. Holdman is the recipient of The Best of State Statue Award, the Governor’s Visual Artist Award, the Star award, etc. He and his art have been featured in the LDS Ensign Magazine, USA Today and the New York Times. He also founded The Art Institute at Thanksgiving Point
						</div>
					</div>
					<div className="row">
						<div className="col l2">
							<img src={coscarson} />
						</div>
						<div className="col l8">
							<span className="bold">R. Cameron Oscarson</span>: Head Artist, Holdman Studios
Cameron Oscarson, also a native of Utah, developed his skills as an artist at a young age and attended Dixie State College on scholarship, then Brigham Young University, receiving a BFA with an emphasis in painting and drawing. He joined Holdman Studios in 2003 and his natural artistic talent has been invaluable to the studios’ accomplishments and projects, including “Roots of Knowledge.” As an award-winning artist himself, Mr. Oscarson has worked on many of his own creative endeavors, including illustrations for children’s books and other commissioned works.
						</div>
					</div>
					<div className="row">
						<div className="col l8 offset-l2 header">
							Roots Media
						</div>
					</div>
					<div className="row">
						<div className="col l8 offset-l2">
							Renowned documentary filmmaker, Lee Groberg will spread the flame across  the world, reaching millions through the four episode series “The Roots of Knowledge, Man’s enduring Quest.” Though the medium of film, Lee will inspire the world with the story told through the art glass masterpiece. Watch now
						</div>
					</div>
					<div className="row">
						<div className="col l8 offset-l2">
							<img src={washington} />
						</div>
					</div>
					<div className="row">
						<div className="col l2">
							<img src={lgroberg} />
						</div>
						<div className="col l8">
							<span className="bold">Lee B. Groberg</span>: Executive Producer, Roots Media President & CEO
An award-winning filmmaker with over 20 years experience, producer-director Lee Groberg has an impressive filmography in the production of historical documentaries, including a growing list of accolades from the film and television industry. Mr. Groberg has developed long-term relationships with many national and international television networks and affiliates. He enjoys associations with leading historical scholars and authorities from around the world. Lee holds an MBA in international business management. Telly Award, Aurora Award, US International Film Festival, PEARL Award, George Washington Medal of Honor, CINE Golden Eagle, Houston International Film Festival, Special Jury Remi Award.
						</div>
					</div>
					<div className="row">
						<div className="col l2">
							<img src={rwoffley} />
						</div>
						<div className="col l8">
							<span className="bold">Ross S. Wolfley</span>: COO – Corporate Counsel, Roots Media
For the past 20 years, Ross has served as COO and Corporate Counsel in the media and high/tech industry. He is an active member of the Utah State Bar, having received his Juris Doctorate from J. Reuben Clark Law School where he graduated Cum Laude. Ross served eight years in the United States Air Force and a T-37 instructor pilot and NATO F-111f fighter and instructor pilot. He worked for WordPerfect Corporation as Director of Marketing and Director of Channel Marketing.
						</div>
					</div>
				</div>
				<div className="icons">
					<img src={holdmanIcon} />
					<img src={uvuIcon} />
					<img src={rootsMediaIcon} />
				</div>
				<div className="tagline">Join in building the masterpiece of a lifetime.</div>
				<a className="link">Sponser a piece of glass</a>
				<Footer />
			</div>
		)
	}
}

export default About;