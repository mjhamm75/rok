import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import DevTools from './containers/DevTools';

const store = configureStore();

render(
	<Provider store={store} >
		<div>
			<Root history={browserHistory} />
			<DevTools />
		</div>
	</Provider>,
  document.getElementById('root')
);
