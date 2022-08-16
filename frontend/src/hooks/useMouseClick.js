import { useState, useEffect } from 'react';

const useMouseClick = () => {
	const [clicked, setClicked] = useState(false);

	const click = (e) => {
		e.preventDefault();
		setClicked(true);
	};

	const release = () => {
		setClicked(false);
	};

	useEffect(() => {
		document.addEventListener('mousedown', click, false);
		document.addEventListener('mouseup', release, false);

		return () => {
			document.removeEventListener('mousedown', click);
			document.removeEventListener('mouseup', release);
		};
	}, []);

	return clicked;
};

export default useMouseClick;
