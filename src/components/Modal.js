import React, { Component } from 'react';

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: false
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			display: newProps.display
		})
	}

	close() {
		this.setState({
			display: false
		})
	}

	render() {
		let display = this.state.display ? {
			display: 'block'
		} : null;
		return (
			<div id="myModal" className="modal" style={display}>
				<div className="modal-content">
					<span onClick={this.close.bind(this)} className="close">x</span>
					<p>Some text in the Modal..</p>
				</div>
			</div>
		)
	}
}

export default Modal;