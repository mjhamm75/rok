import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	render() {
		return (
			<div>
				<div>{this.props.children}</div>
			</div>
		)
	}
}

export default App;