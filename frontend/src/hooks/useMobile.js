import useMediaQuery from '@mui/material/useMediaQuery';

/**
 *
 * @param {Number} maxWidth - width for matching mobile screens (in pixels)
 * @returns {Array} [isMobile] - boolean for the matching query
 */
const useMobile = ({ maxWidth }) => {
	const isMobile = useMediaQuery(`(max-width:${maxWidth}px)`);

	return [isMobile];
};

export default useMobile;
