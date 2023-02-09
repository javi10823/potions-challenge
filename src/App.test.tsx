/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('should render the app', () => {
		const { getByText } = render(<App />);

		expect(getByText('Calculate')).toBeInTheDocument();
	});

	it('should calculate the damage and combinations when clicking on the button', () => {
		const { getByText, getByTestId, getAllByText } = render(<App />);

		fireEvent.change(getByTestId('red-potion'), { target: { value: 2 } });
		fireEvent.change(getByTestId('blue-potion'), { target: { value: 1 } });

		fireEvent.click(getByText('Calculate'));

		expect(getByText('Damage: 9 %')).toBeInTheDocument();

		expect(getAllByText('Atacked using a red potion')[0]).toBeInTheDocument();
		expect(getAllByText('Atacked using a blue potion')[0]).toBeInTheDocument();
		expect(getAllByText('Atacked using a red potion')[0]).toBeInTheDocument();
	});

	it('Should calculate damage and combinations correctly on submit', () => {
		const { getByText, getByTestId } = render(<App />);
		const redPotionInput = getByTestId('red-potion');
		const bluePotionInput = getByTestId('blue-potion');
		const yellowPotionInput = getByTestId('yellow-potion');
		const grayPotionInput = getByTestId('gray-potion');
		const greenPotionInput = getByTestId('green-potion');
		const calculateBtn = getByText('Calculate');

		act(() => {
			fireEvent.change(redPotionInput, { target: { value: 3 } });
			fireEvent.change(bluePotionInput, { target: { value: 2 } });
			fireEvent.change(yellowPotionInput, { target: { value: 1 } });
			fireEvent.change(grayPotionInput, { target: { value: 0 } });
			fireEvent.change(greenPotionInput, { target: { value: 0 } });
		});

		act(() => {
			fireEvent.click(calculateBtn);
		});

		const damageDisplay = getByText('Damage: 19 %');
		const combinationDisplay = getByText(
			'Attacked using a combination of red, blue & yellow potions'
		);

		expect(damageDisplay).toBeInTheDocument();
		expect(combinationDisplay).toBeInTheDocument();
	});

	it('Should calculate damage and combinations correctly with four potions', () => {
		const { getByText, getByTestId } = render(<App />);
		const redPotionInput = getByTestId('red-potion');
		const bluePotionInput = getByTestId('blue-potion');
		const yellowPotionInput = getByTestId('yellow-potion');
		const grayPotionInput = getByTestId('gray-potion');
		const greenPotionInput = getByTestId('green-potion');
		const calculateBtn = getByText('Calculate');

		act(() => {
			fireEvent.change(redPotionInput, { target: { value: 3 } });
			fireEvent.change(bluePotionInput, { target: { value: 2 } });
			fireEvent.change(yellowPotionInput, { target: { value: 1 } });
			fireEvent.change(grayPotionInput, { target: { value: 1 } });
			fireEvent.change(greenPotionInput, { target: { value: 0 } });
		});

		act(() => {
			fireEvent.click(calculateBtn);
		});

		const damageDisplay = getByText('Damage: 29 %');
		const combinationDisplay = getByText(
			'Attacked using a combination of red, blue, yellow & gray potions'
		);

		expect(damageDisplay).toBeInTheDocument();
		expect(combinationDisplay).toBeInTheDocument();
	});
});
