import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { Image, Message, Title } from './styles';

function EmptyMessage({
	title,
	backAction,
	backMessage,
	hideBackButton,
	contact,
	description,
	image,
	alt
}) {
	return (
		<div>
			<Image src={image} alt={alt} draggable="false" />

			<Title>
				<strong>{title}</strong>
			</Title>
			<Message>
				<span>{description}</span>
				{contact && (
					<p>
						Você pode entrar em contato conosco em:{' '}
						<a href="mailto:vecep.fuvest@gmail.com">vecep.fuvest@gmail.com</a>
					</p>
				)}
			</Message>

			{!hideBackButton && (
				<Button variant="outlined" onClick={backAction}>
					{backMessage}
				</Button>
			)}
		</div>
	);
}

EmptyMessage.defaultProps = {
	backAction: () => history.back(),
	backMessage: 'Voltar',
	hideBackButton: false,
	children: <></>,
	image: 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg', // TODO: replace with static image
	alt: 'Empty content image',
	title: 'Sem dados'
};

EmptyMessage.propTypes = {
	title: PropTypes.string,
	backAction: PropTypes.func,
	backMessage: PropTypes.string,
	hideBackButton: PropTypes.bool,
	children: PropTypes.node,
	image: PropTypes.string,
	alt: PropTypes.string,
	contact: PropTypes.bool,
	description: PropTypes.string
};

export default EmptyMessage;
