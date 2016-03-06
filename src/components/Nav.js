import React, { Component } from 'react';
import { Link } from 'react-router';
import bag from './../imgs/shopping-bag.png'
import logo from './../imgs/rok-logo-white.png';

require('!style!css!sass!./../sass/nav.scss');

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fixed: this.props.fixed,
			showLogo: this.props.fixed,
			selectedItems: this.props.selectedItems
		}
		this.handleScroll = this.handleScroll.bind(this);
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
		if(!this.props.fixed) {
    		window.addEventListener('scroll', this.handleScroll);
    		window.addEventListener("resize", this.handleResize);
		}
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	    window.removeEventListener('resize', this.handleResize)
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			selectedItems: newProps.selectedItems
		})
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

	handleResize() {
		if(window.innerWidth < 992) {
			this.setState({
				showLogo: true
			})
		} else {
			this.setState({
				showLogo: false
			})
		}
	}

	render() {
		var fixedStyle = this.state.fixed ? {
			position: 'fixed',
			top: 0,
			width: '100%'
		} : null;

		var hideLogo = !this.state.fixed && !this.state.showLogo ? {
			display: 'none'
		} : null;

		var hideBag = !this.state.selectedItems || this.state.selectedItems.length === 0 ? {
			display: 'none'
		} : null;
		return (
			<div className="navbar" ref="navbar" style={fixedStyle}>
				<div />
				<div>
					<Link to="/">
						<div className="logo">
							<img style={hideLogo} src={logo}/>
							<div>The Roots of Knowledge Project</div>
						</div>
					</Link>
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
				<div className="bag-wrapper">
					<div style={hideBag} className="circle">{this.state.selectedItems && this.state.selectedItems.length}</div>
					<img className="bag" src={bag}/>
				</div>
			</div>
		)
	}
}

export default Nav;