import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: {
		coffee: {
			name: 'Coffee',
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
			types: [
				{
					name: 'Black tea',
					price: 7.99,
				},
				{
					name: 'Green tea',
					price: 7.99,
				},
				{
					name: 'Milk tea',
					price: 7.99,
				},
			],
		},
	},
};

export const MenuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		coffeeTypes(state, action) {
			state.data = state.data.coffee;
		},
		teaTypes(state, action) {
			state.data = action.data.tea;
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

export const { coffeeTypes } = MenuSlice.actions;

export const Menu = MenuSlice.reducer;
