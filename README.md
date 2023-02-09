# CLOVERS POTION CHALLENGE

## Author:

### Javier Olivieri

## Code

App created with React JS, Typescript, React-testing-library and Jest.

This app emulates a potion shop, it caculates the most damage percentage that can be done with the given amount of potions.

The Algorithm validates the amount of different potions and then calculates the most efficient combination of attacks. Retreiving a list of attacks and the final damage percentage.

The algorithm stores the potions in an array an then sorts the potions array in descending order of the value property. It then filters out the potion objects that have value less than or equal to 0.

The array is then used to calculate the maximum damage that can be dealt. The function uses two helper functions, potionIndividually and potionTogether, to calculate the damage from using each potion individually or using multiple potions together.

In potionIndividually, for each potion object in the array, the damage is incremented by 3 and the corresponding attack information is added to the attackList array.

In potionTogether, if there are 3 potion objects, the damage is incremented by 10. Otherwise, the damage is incremented by the number of different potions multiplied by 5. The corresponding attack information is added to the attackList array, which includes the colors of the used potions.

The MaxDamage function then uses a while loop to repeatedly call the potionIndividually and potionTogether functions until the array is empty.

The final value of the damage is stored in the state totalDamage using the setDamage function. The array of attack information is stored in the state combinations using the setCombinations function.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
