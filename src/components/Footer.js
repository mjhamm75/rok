import React, { Component } from 'react';
import { Link } from 'react-router';

let twitter = require('./../imgs/twitter.png');
let facebook = require('./../imgs/facebook.png');
let pinterest = require('./../imgs/pinterest.png');

require('!style!css!sass!./../sass/footer.scss');

class Footer extends Component {
	render() {
		return (
			<div className="footer">
					<div>
						<div>
							<div>Contact Us:</div>
							<div>1-801-766-4111</div>
						</div>
						<br />
						<div>
							<div>3001 N Thanksgiving Way</div>
							<div>Lehi, UT 84043</div>
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
							<Link to="donations">Donate</Link>
						</div>
					</div>
					<div>
						<div>
							<img src={twitter}/>
							<a href="https://twitter.com/roots_knowledge">Twitter</a>
						</div>
						<div>
							<img src={facebook}/>
							<a href="https://www.facebook.com/rootsofknowledge">Facebook</a>
						</div>
						<div>
							<img src={pinterest}/>
							<a href="https://www.instagram.com/roots_of_knowledge/">Pinterest</a>
						</div>
					</div>
				</div>
		)
	}
}

export default Footer;