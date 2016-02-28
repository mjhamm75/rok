import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';

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
					<input ref="emailAddress" placeholder=" Email Address"/>
					<textarea ref="message" rows="8" placeholder=" Message"/>
					<div>
						<a onClick={this.sendEmail.bind(this)}>Send</a>
					</div>
				</div>
			</div>
		)
	}

	sendEmail() {
		axios.post('/email', {
			email: this.refs.emailAddress.value,
			message: this.refs.message.value
		}).then(res => {
			console.log("=====EMAIL======")
			console.log(res);
		});
	}
}

export default Contact;