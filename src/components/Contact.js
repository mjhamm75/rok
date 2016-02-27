import React, { Component } from 'react';
import Nav from './Nav';

require('!style!css!sass!./../sass/contact.scss');

class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<Nav fixed="true"/>
				<div className="form">
					<div>Contact Us</div>
					<div>Questions about the project? Looking for a way to donate at an executive level, or information for the press. Send us a note and we’ll get back to you soon.</div>
					<div>1-801-555-5555</div>
					<div>
						<div>Roots of Knowledge</div>
						<div>3001 N Thanksgiving Way</div>
						<div>Lehi, UT 840435</div>
					</div>
					<input placeholder=" Email Address"/>
					<textarea rows="8" placeholder=" Message"/>
					<div>
						<a>Send</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;