import { configureStore } from '@reduxjs/toolkit';
import { Menu } from './slices/MenuSlice';
export const store = configureStore({
	reducer: {
		menu: Menu
	}
});
