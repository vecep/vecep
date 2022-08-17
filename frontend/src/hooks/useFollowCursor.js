import { useEffect, useRef } from 'react';
import useMouseClick from './useMouseClick';
import useMousePosition from './useMousePosition';

const useFollowCursor = (sideAnimations) => {
	const mousePosition = useMousePosition();
	const mouseClicked = useMouseClick();
	const mouseRef = useRef({ mousePosition, mouseClicked });
	const elementRef = useRef();
	const requestRef = useRef();
	const positionRef = useRef({
		x: 10,
		y: 10
	});
	const velocityRef = useRef({
		x: 10,
		y: 10
	});

	useEffect(() => {
		render();
		return () => cancelAnimationFrame(requestRef.current);
	}, []);

	useEffect(() => {
		mouseRef.current.mousePosition = mousePosition;
	}, [mousePosition]);
	useEffect(() => {
		mouseRef.current.mouseClicked = mouseClicked;
	}, [mouseClicked]);

	const render = () => {
		requestRef.current = requestAnimationFrame(render);
		follow();
	};

	const map = (num, in_min, in_max, out_min, out_max) => {
		return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
	};

	const follow = () => {
		const { clientX, clientY } = mouseRef.current.mousePosition;
		const position = positionRef.current;

		const _distance = {
			x: clientX - position.x,
			y: clientY - position.y
		};
		const _velocity = {
			x: _distance.x / 8,
			y: _distance.y / 8
		};
		const _position = {
			x: position.x + _distance.x / 10,
			y: position.y + _distance.y / 10
		};
		const _animationProps = {
			skewX: map(_velocity.x, 0, 100, 0, -50),
			scaleY: map(_velocity.y, 0, 100, 1, 2.0)
		};

		sideAnimations?.({
			distance: _distance,
			velocity: _velocity,
			position: _position,
			animationProps: _animationProps,
			map,
			clicked: mouseRef.current.mouseClicked
		});

		if (elementRef.current) {
			elementRef.current.style.transform = `
				translate(${_position.x}px, ${_position.y}px)
				skew(${_animationProps.skewX}deg)
				rotate(${-_animationProps.skewX}deg)
				scaleY(${_animationProps.scaleY})
			`;
		}

		positionRef.current = _position;
		velocityRef.current = _velocity;
	};

	return { elementRef, map };
};

export default useFollowCursor;
