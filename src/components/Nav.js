import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { Link } from 'react-router';
import Cart from './Cart';
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
		this.showCart = this.showCart.bind(this);
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
			selectedItems: newProps.selectedItems,
			showCart: newProps.openCart
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
			<div className="nav" ref="navbar" style={fixedStyle}>
				<Cart selectedItems={this.state.selectedItems} show={this.props.showCart || this.state.showCart} closeCart={this.closeCart.bind(this)} removePiece={this.props.removePiece}/>
				<div className="navbar">
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
					<div className="bag-wrapper" onClick={this.showCart}>
						<div style={hideBag} className="circle">{this.state.selectedItems && this.state.selectedItems.length}</div>
						<img className="bag" src={bag}/>
					</div>
				</div>
			</div>
		)
	}

	showCart() {
		this.setState({
			showCart: true
		})
	}

	closeCart() {
		this.setState({showCart: false});
		this.props.resetOpenCart();
	}
}

export default Nav;