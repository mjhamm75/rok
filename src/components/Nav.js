import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { removeSelectedGlass } from './../actions/GlassActions';
import { Link } from 'react-router';
import Cart from './Cart';
import ShoppingBagIcon from './ShoppingBagIcon';
import { charge, chargeButtonEnabled, openCheckout } from './../actions/GlassActions';
import logo from './../imgs/rok-logo-white.png';

import s from './Nav.css';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fixed: this.props.fixed,
			showLogo: this.props.fixed,
			selectedItems: []
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

	showCart(showCart) {
		this.props.dispatch(openCheckout(showCart));
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

	removePiece(name, id) {
		this.props.dispatch(removeSelectedGlass(name, id));
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

		return (
			<div
				className={s.nav}
				ref="navbar"
				style={fixedStyle}>
				<Cart
					charge={this.charge.bind(this)}
					closeCart={() => this.showCart(false) }
					chargeButtonEnabled={this.props.chargeButtonEnabled}
					disableDonateButton={this.disableDonateButton.bind(this)}
					removePiece={this.removePiece.bind(this)}
					selectedItems={this.props.selectedItems}
					show={this.props.showCart}
					thankyou={this.thankyou.bind(this)}
				/>
				<div className={s.navbar}>
					<div className={s.placeholder}/>
					<div className={s.item}>
						<Link to="/" className={s.link}>
							<div className={s.logo}>
								<img className={s.logoImage} style={hideLogo} src={logo}/>
								<div>The Roots of Knowledge Project</div>
							</div>
						</Link>
					</div>
					<div className={s.item}>
						<Link className={s.toggle} to="about">About the Project</Link>
					</div>
					<div className={s.item}>
						<Link className={s.toggle} to="donations">Donate</Link>
					</div>
					<div className={s.item}>
						<Link className={s.toggle} to="contact">Contact Us</Link>
					</div>
					<div className={s.cart}>
						<ShoppingBagIcon
							onClick={() => this.showCart(true) }
							selectedItems={this.props.selectedItems}
							/>
					</div>
				</div>
			</div>
		)
	}

	thankyou() {

	}

	disableDonateButton() {
		this.props.dispatch(chargeButtonEnabled(false));
	}

	charge(token, amount, email, selecteItems) {
		this.props.dispatch(charge(token, amount, email, selecteItems));
	}
}

function mapStateToProps(state) {
	return {
	chargeButtonEnabled: state.chargeButtonEnabled,
		selectedItems: state.selectedItems,
		showCart: state.toggleCart
	}
}
export default connect(mapStateToProps)(Nav);
