/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Card from '..';
import exerciseMock from '../__mocks__/exercise';

const user = userEvent.setup();

const renderComponent = ({ exercise = {} } = {}) => {
	render(<Card exercise={{ ...exerciseMock, ...exercise }} />);
};
 
test('fails test', () => {
	expect(1).toBe(null);
});

describe('Card Display', () => {
	test('renders Subject title in the card', () => {
		renderComponent();

		expect(screen.getByText('Matemática')).toBeInTheDocument();
	});

	test('renders Topics chips in the card', () => {
		renderComponent();

		expect(screen.getByText('Matemática básica')).toBeInTheDocument();
		expect(screen.getByText('Fração')).toBeInTheDocument();
	});

	test('renders exam Year in the card', () => {
		renderComponent();

		expect(screen.getByText('2019')).toBeInTheDocument();
	});

	test('renders References in the card', () => {
		renderComponent();

		expect(screen.getByText('Referência 1')).toBeInTheDocument();
		expect(screen.getByText('Referência 2')).toBeInTheDocument();
	});

	test('renders Question in the card', () => {
		renderComponent();

		expect(screen.getByText('Essa é uma questão. Ou será que não?')).toBeInTheDocument();
	});

	test('renders 5 Options in the card', () => {
		renderComponent();

		expect(screen.getAllByRole('radio')).toHaveLength(5);
	});

	test('renders Answer button in the card', () => {
		renderComponent();

		expect(screen.getByRole('button', { name: /RESPONDER/i })).toBeInTheDocument();
	});
});

describe('Reference Display', () => {
	test('does NOT show Reference content initially', () => {
		renderComponent();

		expect(screen.queryByAltText('Imagem de fração')).not.toBeVisible();
	});

	test('shows Reference content when expanding it', async () => {
		renderComponent();
		const referenceAccordion = screen.getByRole('button', { name: 'Referência 1' });

		await user.click(referenceAccordion);

		expect(screen.getByAltText('Imagem de fração')).toBeVisible();
	});

	test('hides Reference when collapsing it', async () => {
		renderComponent();
		const referenceAccordion = screen.getByRole('button', { name: 'Referência 1' });

		await user.click(referenceAccordion);
		await user.click(referenceAccordion);

		expect(screen.queryByAltText('Imagem de fração')).not.toBeVisible();
	});

	describe('Unhappy path', () => {
		test('should NOT open a Reference other than the one clicked', () => {
			renderComponent();

			user.click(screen.getByText('Referência 2'));

			expect(screen.queryByAltText('Imagem de fração')).not.toBeVisible();
		});
	});
});

describe('Options Interactions', () => {
	test('disable ANSWER button if no Option is checked', async () => {
		renderComponent();

		expect(screen.getByRole('button', { name: /RESPONDER/i })).toBeDisabled();
	});

	test('should display visual feedback when submitting CORRECT answer', async () => {
		renderComponent();

		await user.click(screen.getByLabelText('2'));
		await user.click(screen.getByRole('button', { name: /RESPONDER/i }));

		expect(screen.getByText('Resposta correta', { exact: false })).toBeInTheDocument();
	});

	test('should display visual feedback when submitting INCORRECT answer', async () => {
		renderComponent();

		await user.click(screen.getByLabelText('1'));
		await user.click(screen.getByRole('button', { name: /RESPONDER/i }));

		expect(screen.getByText('Resposta incorreta', { exact: false })).toBeInTheDocument();
	});

	describe('Unhappy path', () => {
		test('should NOT reveal answer status until the ANSWER button is clicked', async () => {
			renderComponent();

			await user.click(screen.getByLabelText('3'));

			expect(screen.getByRole('button', { name: /RESPONDER/i })).toBeInTheDocument();
		});

		test('should NOT keep ANSWER label after submitting answer', async () => {
			renderComponent();

			await user.click(screen.getByLabelText('3'));
			await user.click(screen.getByRole('button', { name: /RESPONDER/i }));

			expect(screen.queryByRole('button', { name: /RESPONDER/i })).not.toBeInTheDocument();
		});

		test('should NOT display visual feedback for CORRECT answer when submitting INCORRECT answer', async () => {
			renderComponent();

			await user.click(screen.getByLabelText('1'));
			await user.click(screen.getByRole('button', { name: /RESPONDER/i }));

			expect(screen.queryByText('Resposta correta', { exact: false })).not.toBeInTheDocument();
		});

		test('should NOT display visual feedback for INCORRECT answer when submitting CORRECT answer', async () => {
			renderComponent();

			await user.click(screen.getByLabelText('2'));
			await user.click(screen.getByRole('button', { name: /RESPONDER/i }));

			expect(screen.queryByText('Resposta incorreta', { exact: false })).not.toBeInTheDocument();
		});
	});
});
