import React from 'react';
import * as exerciseApi from 'services/exercise';
import { Autocomplete, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import AsyncLoader from 'components/AsyncLoader';
import { useQuery } from '@tanstack/react-query';
import Chip from 'components/Chip';
import { stringToColor } from 'utils';
import { isNil } from 'lodash';
import PropTypes from 'prop-types';

const ExercisesFilterControl = ({ onChange }) => {
	const queryKey = ['exerciseFilters'];
	const queryFn = () => exerciseApi.listFilters();

	// TODO: add way to refresh filters when new ones are added
	// maybe pub/sub, websocket?
	const { data: exerciseFilters } = useQuery(queryKey, queryFn, {
		refetchOnWindowFocus: false
	});

	const onInternalChange = (type, value) => {
		if (!isNil(value) || value.length > 0) onChange(type, value);
		else onChange(type, undefined);
	};

	return (
		<AsyncLoader queryKey={queryKey} queryFn={queryFn}>
			<Grid container spacing={2} gridRow alignItems="center" sx={{ marginBottom: '3em' }}>
				<Grid item>
					<Autocomplete
						disablePortal
						id="combo-box-demo"
						sx={{ width: 150 }}
						options={exerciseFilters?.years || []}
						getOptionLabel={(option) => option.toString()}
						renderInput={(params) => <TextField {...params} label="Ano" />}
						onChange={(_event, value) => {
							onInternalChange('exam.year', value);
						}}
					/>
				</Grid>
				<Grid item>
					<Autocomplete
						multiple
						id="tags-standard"
						sx={{ maxWidth: 450, minWidth: 200 }}
						limitTags={2}
						options={exerciseFilters?.topics || []}
						renderInput={(params) => <TextField {...params} label="Tópicos" />}
						renderTags={(value) =>
							value.map((option) => (
								<Chip
									key={option}
									label={option}
									customColor={() => stringToColor(option, '80')}
									sx={{ maxWidth: 150 }}
								/>
							))
						}
						onChange={(_event, value) => {
							onInternalChange('topics', value);
						}}
						renderOption={(props, option, { selected }) => (
							<li {...props} title={option}>
								<Chip
									label={option}
									customColor={() => selected && stringToColor(option, '80')}
									sx={{ pointerEvents: 'none' }}
								/>
							</li>
						)}
						componentsProps={{
							paper: {
								sx: {
									width: 400
								}
							}
						}}
					/>
				</Grid>
				<Grid item>
					<FormControlLabel
						control={
							<Checkbox
								onChange={(event) => {
									onInternalChange('answered', !event.target.checked);
								}}
							/>
						}
						label="Ocultar respondidos"
					/>
				</Grid>
			</Grid>
		</AsyncLoader>
	);
};

ExercisesFilterControl.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default ExercisesFilterControl;
