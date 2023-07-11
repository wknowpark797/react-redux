import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import App2 from './use-context/App';
import App3 from './use-reducer/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
	<HashRouter>
		<App3 />
	</HashRouter>,
	document.getElementById('root')
);
