import React, { Component } from 'react';
import { Link } from 'react-router';
import Copywrite from './Copywrite';

let twitter = require('./../imgs/twitter.png');
let facebook = require('./../imgs/facebook.png');
let instagram = require('./../imgs/instagram.png');

require('!style!css!sass!./../sass/footer.scss');

import s from './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div>
				<div className={s.footer}>
						<div className={s.column}>
							<div>
								<div>Contact Us:</div>
								<div>801-766-4111</div>
							</div>
							<br />
							<div>
								<div>3001 N Thanksgiving Way</div>
								<div>Lehi, UT 84043</div>
							</div>
						</div>
						<div className={s.column}>
							<div>
								<Link
									className={s.link}
									to="about"
								>About Us</Link>
							</div>
							<div>
								<Link
									className={s.link}
									to="about#artists"
								>Meet the Artists</Link>
							</div>
							<div>
								<Link
									className={s.link}
									to="about#uvu"
								>Utah Valley University</Link>
							</div>
							<div>
								<Link
									className={s.link}
									to="donations"
								>Donate</Link>
							</div>
						</div>
						<div className={s.links}>
							<div>
								<img
									className={s.image}
									src={twitter}
								/>
								<a
									className={s.link}
									href="https://twitter.com/roots_knowledge"
								>Twitter</a>
							</div>
							<div>
								<img
									className={s.image}
									src={facebook}
								/>
								<a
									className={s.link}
									href="https://www.facebook.com/rootsofknowledge"
								>Facebook</a>
							</div>
							<div>
								<img
									className={s.instagram}
									src={instagram}
								/>
								<a
									className={s.link}
									href="https://www.instagram.com/roots_of_knowledge/
								">Instagram</a>
							</div>
						</div>
					</div>
					<Copywrite />
				</div>
		)
	}
}

export default Footer;
