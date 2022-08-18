import React from 'react';
import PropTypes from 'prop-types';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CloudImage from 'components/CloudImage';
import useMobile from 'hooks/useMobile';
import * as S from './styles';
import Latext from 'components/Latext';

const Options = ({ options, selectedAnswer, handleChange, answered, readOnly }) => {
	const [isMobile] = useMobile();
	const hasOneImage = options.some((o) => o.image);

	const renderOptions = () => (
		<S.Grid imageDisplay={!isMobile && hasOneImage}>
			{options
				.sort((a, b) => !!a.text - !!b.text)
				.map((o) => (
					<S.OptionsContainer key={o._id}>
						<FormControlLabel
							key={o._id}
							value={o.position.toString()}
							control={<S.Option />}
							label={
								o.image ? (
									<S.ImageWrapper>
										<CloudImage cloudId={o.image.cloudId} alt={o.image.description} />
									</S.ImageWrapper>
								) : (
									<Latext label>{o.text}</Latext>
								)
							}
							disabled={answered || readOnly}
						/>
					</S.OptionsContainer>
				))}
		</S.Grid>
	);

	return (
		<FormControl>
			<RadioGroup
				// TODO: needs label for accessibility
				name="option-buttons-group"
				value={selectedAnswer}
				onChange={handleChange}
			>
				{renderOptions()}
			</RadioGroup>
		</FormControl>
	);
};

Options.defaultProps = {
	selectedAnswer: null,
	answered: false,
	readOnly: false
};

Options.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	selectedAnswer: PropTypes.number,
	handleChange: PropTypes.func.isRequired,
	answered: PropTypes.bool,
	readOnly: PropTypes.bool
};

export default Options;
