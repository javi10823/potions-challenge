import React, { useState } from 'react';
import styles from './App.module.css';
import { potion } from './interface';
import Potions from './Potions';

function App() {
	const [totalDamage, setDamage] = useState(0);
	const [combinations, setCombinations] = useState<Array<string>>([]);
	let damage = 0;
	let attackList: Array<string> = [];

	const [redPotion, setRedPotion] = useState(0);
	const [greenPotion, setGreenPotion] = useState(0);
	const [yellowPotion, setYellowPotion] = useState(0);
	const [grayPotion, setGrayPotion] = useState(0);
	const [bluePotion, setBluePotion] = useState(0);

	function potionIndividually(pot: potion[]) {
		pot.forEach((pot) => {
			damage += 3;
			attackList.push(`Atacked using a ${pot.color} potion`);
			pot.value -= 1;
		});
		return pot;
	}

	function potionTogether(pot: potion[]) {
		let combinedAttack: string[] = [];
		pot.length === 3 ? (damage += 10) : (damage += pot.length * 5);
		pot.forEach((pot) => {
			combinedAttack.push(`${pot.color},`);
			pot.value -= 1;
		});
		combinedAttack[combinedAttack.length - 2] = combinedAttack[
			combinedAttack.length - 2
		].replace(',', ' &');
		combinedAttack[combinedAttack.length - 1] = combinedAttack[
			combinedAttack.length - 1
		].replace(',', '');
		attackList.push(
			`Attacked using a combination of ${combinedAttack.join(' ')} potions`
		);
		return pot;
	}

	function MaxDamage(pots: potion[]) {
		pots.sort((a, b) => b.value - a.value);
		let localePotions = pots.filter((potion) => potion.value > 0);
		while (localePotions.length > 0) {
			if (localePotions.length <= 2) {
				localePotions = potionIndividually(localePotions);
			} else {
				localePotions = potionTogether(localePotions);
			}
			localePotions = localePotions.filter((potion) => potion.value > 0);
		}
		setDamage(damage);
		setCombinations(attackList);
	}

	const render = (Array: string[]) =>
		Array.map((item, i) => (
			<li key={i} className={styles.li}>
				{item}
			</li>
		));

	const onSubmit = () => {
		MaxDamage([
			{ color: 'red', value: redPotion },
			{ color: 'blue', value: bluePotion },
			{ color: 'yellow', value: yellowPotion },
			{ color: 'green', value: greenPotion },
			{ color: 'gray', value: grayPotion },
		]);
	};

	return (
		<div className={styles.app}>
			<div className={styles['app-main']}>
				<div className={styles.container}>
					<Potions
						setRedPotion={setRedPotion}
						setGreenPotion={setGreenPotion}
						setYellowPotion={setYellowPotion}
						setGrayPotion={setGrayPotion}
						setBluePotion={setBluePotion}
					/>
					<button onClick={onSubmit}>Calculate</button>
				</div>
				<div className={styles.container}>
					<h4>Results:</h4>
					<p>Damage: {totalDamage} %</p>
					<ol>{render(combinations)}</ol>
				</div>
			</div>
		</div>
	);
}

export default App;
