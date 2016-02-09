import React, { Component } from 'react';
import Sticky from 'react-sticky';

class Home extends Component {
	render() {
		return (
			<div>
				<div>
					<div>
						<div>
							<div>
								<img src="./imgs/rok-logo.png" />
							</div>
							<div>
								<img src="./imgs/rok.png" />
							</div>
							<div>
								<div>The Roots of Knowledge art glass window showcases humanitys pursuit of knowledge since the dawn of recorded time.  The documentary will transform the window into a live rendition of the journey of knowledge and will act as a megaphone to spread the message of the masterpiece to the world.</div>
								<button>Sponser a piece of glass</button>
							</div>
						</div>
					</div>
				</div>
				<Sticky>
					<div className="navbar">
						<div>Invisible</div>
						<div>The Roots of Knowledge Project</div>
						<div>About the Project</div>
						<div>Donate</div>
						<div>Contact Us</div>
						<div>mailbox</div>
					</div>
				</Sticky>
			</div>
		)
	}
}

export default Home;