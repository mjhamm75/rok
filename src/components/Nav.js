import React, { Component } from 'react';
import { Link } from 'react-router';
import bag from './../imgs/shopping-bag.png'
require('!style!css!sass!./../sass/nav.scss');

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fixed: this.props.state
		}
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		if(window.scrollY >= 596) {
			this.setState({
				fixed: true
			})
		} else {
			this.setState({
				fixed: false
			})
		}
	}

	render() {
		var fixedStyle = this.state.fixed ? {
			position: 'fixed',
			top: 0,
			width: '100%'
		} : null;

		return (
			<div className="navbar" ref="navbar" style={fixedStyle}>
				<div>
					<a>Invisible</a>
				</div>
				<div>
					<Link to="/">The Roots of Knowledge Project</Link>
				</div>
				<div>
					<Link className="toggle" to="about">About the Project</Link>
				</div>
				<div>
					<Link className="toggle" to="donations">Donate</Link>
				</div>
				<div>
					<Link className="toggle" to="contact">Contact Us</Link>
				</div>
				<div>
					<img className="bag" src={bag}/>
				</div>
			</div>
		)
	}
}

export default Nav;