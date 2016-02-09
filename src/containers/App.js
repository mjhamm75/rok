import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('!style!css!./../sass/app.scss');

class App extends Component {
	render() {
		return (
			<div>
				<h1>App</h1>
				<div>{this.props.children}</div>
			</div>
		)
	}
}

export default App;