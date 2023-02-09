import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Potions from './index';
import '@testing-library/jest-dom';

describe('Potions component', () => {
	it('should render five input fields', () => {
		const setRedPotion = jest.fn();
		const setGreenPotion = jest.fn();
		const setYellowPotion = jest.fn();
		const setGrayPotion = jest.fn();
		const setBluePotion = jest.fn();

		render(
			<Potions
				setRedPotion={setRedPotion}
				setGreenPotion={setGreenPotion}
				setYellowPotion={setYellowPotion}
				setGrayPotion={setGrayPotion}
				setBluePotion={setBluePotion}
			/>
		);

		const redPotionInput = screen.getByRole('spinbutton', {
			name: 'Red',
		});
		const bluePotionInput = screen.getByRole('spinbutton', {
			name: 'Blue',
		});
		const yellowPotionInput = screen.getByRole('spinbutton', {
			name: 'Yellow',
		});
		const greenPotionInput = screen.getByRole('spinbutton', {
			name: 'Green',
		});
		const grayPotionInput = screen.getByRole('spinbutton', {
			name: 'Gray',
		});

		expect(redPotionInput).toBeInTheDocument();
		expect(bluePotionInput).toBeInTheDocument();
		expect(yellowPotionInput).toBeInTheDocument();
		expect(greenPotionInput).toBeInTheDocument();
		expect(grayPotionInput).toBeInTheDocument();
	});

	it('should call the setRedPotion function when the red potion input is changed', () => {
		const setRedPotion = jest.fn();
		const setGreenPotion = jest.fn();
		const setYellowPotion = jest.fn();
		const setGrayPotion = jest.fn();
		const setBluePotion = jest.fn();

		render(
			<Potions
				setRedPotion={setRedPotion}
				setGreenPotion={setGreenPotion}
				setYellowPotion={setYellowPotion}
				setGrayPotion={setGrayPotion}
				setBluePotion={setBluePotion}
			/>
		);

		const redPotionInput = screen.getByTestId('red-potion');

		fireEvent.change(redPotionInput, { target: { value: '10' } });

		expect(setRedPotion).toHaveBeenCalledWith(10);
	});

	it('should call the setBluePotion function when the blue potion input is changed', () => {
		const setRedPotion = jest.fn();
		const setGreenPotion = jest.fn();
		const setYellowPotion = jest.fn();
		const setGrayPotion = jest.fn();
		const setBluePotion = jest.fn();

		render(
			<Potions
				setRedPotion={setRedPotion}
				setGreenPotion={setGreenPotion}
				setYellowPotion={setYellowPotion}
				setGrayPotion={setGrayPotion}
				setBluePotion={setBluePotion}
			/>
		);

		const setBluePotionInput = screen.getByTestId('blue-potion');

		fireEvent.change(setBluePotionInput, { target: { value: '10' } });

		expect(setBluePotion).toHaveBeenCalledWith(10);
	});

	it('should call the setGreenPotion function when the blue potion input is changed', () => {
		const setRedPotion = jest.fn();
		const setGreenPotion = jest.fn();
		const setYellowPotion = jest.fn();
		const setGrayPotion = jest.fn();
		const setBluePotion = jest.fn();

		render(
			<Potions
				setRedPotion={setRedPotion}
				setGreenPotion={setGreenPotion}
				setYellowPotion={setYellowPotion}
				setGrayPotion={setGrayPotion}
				setBluePotion={setBluePotion}
			/>
		);

		const setGreenPotionInput = screen.getByTestId('green-potion');

		fireEvent.change(setGreenPotionInput, { target: { value: '10' } });

		expect(setGreenPotion).toHaveBeenCalledWith(10);
	});

	it('should call the setYellowPotion function when the blue potion input is changed', () => {
		const setRedPotion = jest.fn();
		const setGreenPotion = jest.fn();
		const setYellowPotion = jest.fn();
		const setGrayPotion = jest.fn();
		const setBluePotion = jest.fn();

		render(
			<Potions
				setRedPotion={setRedPotion}
				setGreenPotion={setGreenPotion}
				setYellowPotion={setYellowPotion}
				setGrayPotion={setGrayPotion}
				setBluePotion={setBluePotion}
			/>
		);

		const setYellowPotionInput = screen.getByTestId('yellow-potion');

		fireEvent.change(setYellowPotionInput, { target: { value: '10' } });

		expect(setYellowPotion).toHaveBeenCalledWith(10);
	});

	it('should call the setGrayPotion function when the blue potion input is changed', () => {
		const setRedPotion = jest.fn();
		const setGreenPotion = jest.fn();
		const setYellowPotion = jest.fn();
		const setGrayPotion = jest.fn();
		const setBluePotion = jest.fn();

		render(
			<Potions
				setRedPotion={setRedPotion}
				setGreenPotion={setGreenPotion}
				setYellowPotion={setYellowPotion}
				setGrayPotion={setGrayPotion}
				setBluePotion={setBluePotion}
			/>
		);

		const setGrayPotionInput = screen.getByTestId('gray-potion');

		fireEvent.change(setGrayPotionInput, { target: { value: '10' } });

		expect(setGrayPotion).toHaveBeenCalledWith(10);
	});
});
