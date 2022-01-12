import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import { Container } from './styles';

/**
 * Gathers both link and icon on only one component
 *
 * @param {Node} icon the icon component
 * @param {String} to the link path
 * @param {Boolean} reverse reverse the order `text - icon`
 * @returns A `div` with the mounted properties
 */
const IconLink = ({ props, children, linkProps, icon, to, reverse = false }) => (
	<Container {...props} reverse={reverse}>
		<Link {...linkProps} to={to}>
			{children}
			{icon}
		</Link>
	</Container>
);

IconLink.propTypes = {
	props: PropTypes.object,
	children: PropTypes.node,
	linkProps: PropTypes.object,
	icon: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
	reverse: PropTypes.bool
};

export default IconLink;
