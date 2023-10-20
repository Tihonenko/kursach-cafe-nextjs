import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: {
		coffee: {
			name: 'Coffee',
			id: 1,
			types: [
				{
					img: '/coffee/americano.jpg',
					name: 'Americano',
					price: 9.99,
				},
				{
					img: '/coffee/latte.jpg',
					name: 'Latte',
					price: 7.99,
				},
				{
					img: '/coffee/cappuchino.jpg',
					name: 'Сappuccino',
					price: 7.99,
				},
				{
					img: '/coffee/ice-cappuchino.jpg',
					name: 'Ice Сappuccino',
					price: 9.99,
				},
			],
		},
		tea: {
			name: 'Tea',
			id: 2,
			types: [
				{
					img: '/tea/black-tea.jpg',
					name: 'Black tea',
					price: 7.99,
				},
				{
					img: '/tea/green-tea.jpg',
					name: 'Green tea',
					price: 7.99,
				},
				{
					img: '/tea/milk-tea.jpg',
					name: 'Milk tea',
					price: 7.99,
				},
			],
		},
	},
	selectedDrink: null,
};

export const MenuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		// coffeeTypes(state, action) {
		// 	state.data = state.data.coffee;
		// },
		// teaTypes(state, action) {
		// 	state.data = action.data.tea;
		// },
		selectDrink: (state, action) => {
			switch (action.payload) {
				case 'tea':
					state.selectedDrink = state.data.tea;

					break;
				case 'coffee':
					state.selectedDrink = state.data.coffee;
					break;
				default:
					state.selectedDrink = null;
					break;
			}
		},
	},
	extraReducers: {},
});

// export const coffeeTypesAction = createAction('coffeeTypes', () => {
// 	return {
// 		data: [
// 			{
// 				name: 'Americano',
// 				price: 9.99,
// 			},
// 			{
// 				name: 'Latte',
// 				price: 7.99,
// 			},
// 			{
// 				name: 'Сappuccino',
// 				price: 7.99,
// 			},
// 		],
// 	};
// });
// const teaTypesAction = createAction('teaTypes');

// MenuSlice.actions.coffeeTypes = coffeeTypesAction;
// MenuSlice.actions.teaTypes = teaTypesAction;

export const { coffeeTypes, selectDrink } = MenuSlice.actions;

export const Menu = MenuSlice.reducer;
