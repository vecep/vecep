import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as authApi from 'services/auth';

const initialContext = {
	isLoggedIn: false
};

export const AuthContext = createContext(initialContext);

const AuthProvider = (props) => {
	const [context, setContext] = useState(initialContext);

	useEffect(() => {
		(async () => {
			await refreshContext();
		})();
	}, [context.isLoggedIn]);

	const refreshContext = async () => {
		const currentUser = authApi.getCurrentUser();

		setContext({
			isLoggedIn: !!currentUser,
			currentUser: currentUser
		});
	};

	return (
		<AuthContext.Provider
			value={{
				...context,
				setIsLoggedIn: (value) => setContext({ ...context, isLoggedIn: value })
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired
};

export default AuthProvider;
