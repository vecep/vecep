import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';

const CloudImage = ({ cloudId, alt, ...props }) => (
	<Image
		cloudName={process.env.REACT_APP_CLOUD_NAME}
		publicId={cloudId}
		width="100%"
		{...props}
		alt={alt}
	/>
);

CloudImage.propTypes = {
	cloudId: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	props: PropTypes.any
};

export default CloudImage;
