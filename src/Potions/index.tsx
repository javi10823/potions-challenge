import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import './styles.css';

interface props {
	setRedPotion: Dispatch<SetStateAction<number>>;
	setGreenPotion: Dispatch<SetStateAction<number>>;
	setYellowPotion: Dispatch<SetStateAction<number>>;
	setGrayPotion: Dispatch<SetStateAction<number>>;
	setBluePotion: Dispatch<SetStateAction<number>>;
}

const Potions = (props: props) => {
	const {
		setRedPotion,
		setGreenPotion,
		setBluePotion,
		setGrayPotion,
		setYellowPotion,
	} = props;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		switch (name) {
			case 'RedPotion':
				setRedPotion(parseInt(value));
				break;
			case 'GreenPotion':
				setGreenPotion(parseInt(value));
				break;
			case 'BluePotion':
				setBluePotion(parseInt(value));
				break;
			case 'GrayPotion':
				setGrayPotion(parseInt(value));
				break;
			case 'YellowPotion':
				setYellowPotion(parseInt(value));
				break;
		}
	};

	return (
		<>
			<h4>Select an amount of potions</h4>
			<div className='potionsContainer'>
				<div>
					<label htmlFor='redPotion'>Red</label>
					<input
						id='redPotion'
						type='number'
						className='input'
						name='RedPotion'
						placeholder='0'
						min={0}
						onChange={handleChange}
						data-testid='red-potion'
					/>
				</div>
				<div>
					<label htmlFor='bluePotion'>Blue</label>
					<input
						id='bluePotion'
						type='number'
						className='input'
						name='BluePotion'
						placeholder='0'
						min={0}
						onChange={handleChange}
						data-testid='blue-potion'
					/>
				</div>
				<div>
					<label htmlFor='yellowPotion'>Yellow</label>
					<input
						id='yellowPotion'
						type='number'
						className='input'
						name='YellowPotion'
						placeholder='0'
						min={0}
						onChange={handleChange}
						data-testid='yellow-potion'
					/>
				</div>
				<div>
					<label htmlFor='greenPotion'>Green</label>
					<input
						id='greenPotion'
						type='number'
						className='input'
						name='GreenPotion'
						placeholder='0'
						min={0}
						onChange={handleChange}
						data-testid='green-potion'
					/>
				</div>
				<div>
					<label htmlFor='grayPotion'>Gray</label>
					<input
						id='grayPotion'
						type='number'
						className='input'
						name='GrayPotion'
						placeholder='0'
						min={0}
						onChange={handleChange}
						data-testid='gray-potion'
					/>
				</div>
			</div>
		</>
	);
};

export default Potions;
