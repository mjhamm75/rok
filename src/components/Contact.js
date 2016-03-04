import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';
import className from 'classnames';

require('!style!css!sass!./../sass/contact.scss');

class Contact extends Component {
	constructor(props) {
		super(props);
		this.clearForm = this.clearForm.bind(this);
		this.state = {
			buttonDisabled: false
		}
	}
	render() {
		let isDisabled = className({
			'disabled': this.state.buttonDisabled
		});

		let buttonText = this.state.buttonDisabled ? 'Sending ...' : 'Send';
		return (
			<div className="contact">
				<Nav fixed="true"/>
				<div className="contact-form">
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
						<a className={isDisabled} onClick={this.sendEmail.bind(this)}>{buttonText}</a>
					</div>
				</div>
			</div>
		)
	}

	clearForm() {
		this.refs.emailAddress.value = '';
		this.refs.message.value = '';
	}

	sendEmail() {
		var that = this;
		this.disableButton(true);
		axios.post('/email', {
			email: this.refs.emailAddress.value,
			message: this.refs.message.value
		}).then(res => {
			that.clearForm();
			that.disableButton(false);
		});
	}

	disableButton(buttonDisabled) {
		this.setState({
			buttonDisabled: buttonDisabled
		})
	}
}

export default Contact;