import React from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CloudImage from 'components/CloudImage';
import useMobile from 'hooks/useMobile';
import * as S from './styles';

const Reference = ({ reference, position }) => {
	const [isMobile] = useMobile();

	return (
		<S.CustomAccordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<S.Text>Referência {position}</S.Text>
			</AccordionSummary>
			<AccordionDetails>
				<S.Text>{reference.text}</S.Text>
				{reference.image && (
					<S.ImageContainer isMobile={isMobile}>
						<CloudImage cloudId={reference.image.cloudId} alt={reference.image.description} />
					</S.ImageContainer>
				)}
				<S.SourceText>
					{reference.author} {reference.author && reference.source && '-'} {reference.source}
				</S.SourceText>
			</AccordionDetails>
		</S.CustomAccordion>
	);
};

Reference.defaultProps = {
	index: null
};

Reference.propTypes = {
	reference: PropTypes.shape({
		author: PropTypes.string,
		image: PropTypes.shape(),
		source: PropTypes.string,
		text: PropTypes.string
	}).isRequired,
	position: PropTypes.number
};

export default Reference;
