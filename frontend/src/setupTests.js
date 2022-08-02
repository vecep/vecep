/* eslint-disable react/prop-types */
import React from 'react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

jest.mock('cloudinary-react', () => ({
	Image: ({ alt }) => <img alt={alt}></img>
}));
