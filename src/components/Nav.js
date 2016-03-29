import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { Link } from 'react-router';
import Cart from './Cart';
import ShoppingBagIcon from './ShoppingBagIcon';
import { charge } from './../actions/GlassActions';
import logo from './../imgs/rok-logo-white.png';

require('!style!css!sass!./../sass/nav.scss');

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

		return (
			<div className="nav" ref="navbar" style={fixedStyle}>
				<Cart selectedItems={this.props.selectedItems} show={this.props.showCart || this.state.showCart} closeCart={() => this.setState({showCart: false}) } removePiece={this.props.removePiece} thankyou={this.thankyou.bind(this)} charge={this.charge.bind(this)}/>
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
					<ShoppingBagIcon selectedItems={this.props.selectedItems} showCart={() => this.setState({showCart: true}) } />
				</div>
			</div>
		)
	}

	thankyou() {
		
	}

	charge(token, amount) {
		this.props.dispatch(charge(token, amount));
	}
}

function mapStateToProps(state) {
	return {
		selectedItems: state.selectedItems,
		showCart: state.toggleCart
	}
}
export default connect(mapStateToProps)(Nav);