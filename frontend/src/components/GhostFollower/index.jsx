import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Container, Ghost, GhostEyes, GhostHead, GhostMouth, GhostRip, GhostTail } from './style';
import useFollowCursor from 'hooks/useFollowCursor';

function GhostFollower({ colorProps }) {
	const eyeRef = useRef();
	const mouthRef = useRef();

	const { elementRef } = useFollowCursor(({ velocity, animationProps, map, clicked }) => {
		// animate eye
		const scaleEye = {
			x: map(Math.abs(velocity.x), 0, 100, 1, 1.2),
			y: clicked ? 0.4 : map(Math.abs(velocity.y * 2), 0, 100, 1, 0.1)
		};

		if (eyeRef.current)
			eyeRef.current.style.transform = `translateX(-50%) scale(${scaleEye.x}, ${scaleEye.y})`;

		// animate mouth
		const scaleMouth = Math.min(
			Math.max(
				map(Math.abs(velocity.x * 1.5), 0, 100, 0, 10),
				map(Math.abs(velocity.y * 1.2), 0, 100, 0, 5)
			),
			2
		);

		if (mouthRef.current)
			mouthRef.current.style.transform =
				'translate(' + (-animationProps.skewX * 0.5 - 10) + 'px) scale(' + scaleMouth + ')';
	});

	return (
		<Container>
			<div>
				<Ghost ref={elementRef}>
					<GhostHead>
						<GhostEyes ref={eyeRef} customColor={colorProps.eye} />
						<GhostMouth ref={mouthRef} customColor={colorProps.mouth} />
					</GhostHead>
					<GhostTail customColor={colorProps.cloth}>
						<GhostRip />
					</GhostTail>
				</Ghost>

				<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
					<defs>
						<filter id="goo">
							<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="ghost-blur" />
							<feColorMatrix
								in="ghost-blur"
								mode="matrix"
								values="
							1 0 0 0 0
							0 1 0 0 0
							0 0 1 0 0
							0 0 0 16 -7"
								result="ghost-gooey"
							/>
						</filter>
					</defs>
				</svg>
			</div>
		</Container>
	);
}

GhostFollower.defaultProps = {
	colorProps: {
		eye: {
			left: '#555',
			right: '#555'
		},
		mouth: '#555',
		cloth: '#fff'
	}
};

GhostFollower.propTypes = {
	colorProps: PropTypes.shape({
		eye: PropTypes.shape({
			left: PropTypes.string,
			right: PropTypes.string
		}),
		mouth: PropTypes.string,
		cloth: PropTypes.string
	})
};

export default GhostFollower;
