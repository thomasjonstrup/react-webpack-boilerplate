import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './styles/style.scss';

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept(<App/>, () => {
		const newApp = require('./components/App').default;
		render(newApp);
	});
}