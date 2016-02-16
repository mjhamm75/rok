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
		)
	}
}

export default Footer;