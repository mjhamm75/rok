import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import axios from 'axios';
import className from 'classnames';

import s from './Contact.css';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.clearForm = this.clearForm.bind(this);
		this.state = {
			buttonDisabled: false
		}
	}
	render() {
		let isDisabled = className(s.button, {
			'disabled': this.state.buttonDisabled
		});

		let buttonText = this.state.buttonDisabled ? 'Sending ...' : 'Send';
		return (
			<div className="contact">
				<Nav fixed="true" selectedItems={this.props.selectedItems}/>
				<div className={s.form}>
					<div className={s.title}>Contact Us</div>
					<div className={s.formElement}>Questions about the project? Looking for a way to donate at an executive level, or information for the press? Send us a note and we’ll get back to you soon.</div>
					<div className={s.formElement}>801-766-4111</div>
					<div className={s.formElement}>
						<div>Roots of Knowledge</div>
						<div>3001 N Thanksgiving Way</div>
						<div>Lehi, UT 840435</div>
					</div>
					<input
						className={s.input}
						ref="emailAddress"
						placeholder=" Email Address"
					/>
					<textarea
						className={s.textarea}
						ref="message"
						rows="8"
						placeholder=" Message"
					/>
					<div className={s.formElement}>
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

function mapStateToProps(state) {
	return {
		selectedItems: state.selectedItems
	}
}
export default connect(mapStateToProps)(Contact);
