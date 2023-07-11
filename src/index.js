import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App2 from './use-context/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
	<HashRouter>
		<App2 />
	</HashRouter>,
	document.getElementById('root')
);
