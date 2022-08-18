import React from 'react';
import PropTypes from 'prop-types';
import EmptyMessage from 'components/EmptyMessage';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, Alert, AlertTitle } from '@mui/material';
import ColorWrapper from 'components/ColorWrapper';
import { useQuery } from '@tanstack/react-query';
import { isNil } from 'lodash';

function AsyncLoader({ noData, fallbackComponent, children, queryKey, queryFn, emptyProps }) {
	const { isLoading, error, refetch, data } = useQuery(queryKey, queryFn, {
		refetchOnWindowFocus: false
	});

	const renderComponent = () => {
		if (isLoading)
			return (
				fallbackComponent || (
					<center>
						<CircularProgress color="secondary" />
						<p>Loading...</p>
					</center>
				)
			);

		if (error)
			return (
				<ColorWrapper>
					<Alert severity="error">
						<AlertTitle>
							<strong>Oops, ocorreu um erro inesperado!</strong>
						</AlertTitle>
						<p>— {error.message}</p>
						<Button variant="outlined" color="error" onClick={refetch}>
							Recarregar
						</Button>
					</Alert>
				</ColorWrapper>
			);

		if (!isNil(noData) ? noData : !data?.length)
			return <EmptyMessage title={emptyProps.title} contact description={emptyProps.description} />;

		return children;
	};

	return renderComponent();
}

AsyncLoader.defaultProps = {
	emptyProps: {
		title: 'Nenhum item encontrado',
		description: 'Isso pode significar nenhum item cadastrado, ou algum erro.'
	}
};

AsyncLoader.propTypes = {
	children: PropTypes.node,
	fallbackComponent: PropTypes.node,
	noData: PropTypes.bool,
	queryKey: PropTypes.arrayOf(PropTypes.string).isRequired,
	queryFn: PropTypes.func.isRequired,
	emptyProps: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string
	})
};

export default AsyncLoader;
