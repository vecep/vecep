import React from 'react';
import ReactDOM from 'react-dom';
import Snackbar from 'components/Snackbar';
import Alert from '@mui/material/Alert';

const success = (content, { timeout = 2000 } = {}) => {
	const container = document.createElement('div');
	document.body.appendChild(container);
	ReactDOM.render(
		<Snackbar>
			<Alert severity="success">{content}</Alert>
		</Snackbar>,
		container
	);
	setTimeout(() => {
		ReactDOM.unmountComponentAtNode(container);
		container.remove();
	}, timeout);
};

const error = (content, { timeout = 2000 } = {}) => {
	const container = document.createElement('div');
	document.body.appendChild(container);
	ReactDOM.render(
		<Snackbar>
			<Alert severity="error">{content}</Alert>
		</Snackbar>,
		container
	);
	setTimeout(() => {
		ReactDOM.unmountComponentAtNode(container);
		container.remove();
	}, timeout);
};

const warning = (content, { timeout = 2000 } = {}) => {
	const container = document.createElement('div');
	document.body.appendChild(container);
	ReactDOM.render(
		<Snackbar>
			<Alert severity="warning">{content}</Alert>
		</Snackbar>,
		container
	);
	setTimeout(() => {
		ReactDOM.unmountComponentAtNode(container);
		container.remove();
	}, timeout);
};

const info = (content, { timeout = 2000 } = {}) => {
	const container = document.createElement('div');
	document.body.appendChild(container);
	ReactDOM.render(
		<Snackbar>
			<Alert severity="info">{content}</Alert>
		</Snackbar>,
		container
	);
	setTimeout(() => {
		ReactDOM.unmountComponentAtNode(container);
		container.remove();
	}, timeout);
};

export default { success, error, warning, info };
