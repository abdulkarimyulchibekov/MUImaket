import create from 'zustand';
import { persist } from 'zustand/middleware';

let store = (set) => ({
	password: '',
	changePassword: (pas) =>
		set(() => ({
			password: pas,
		})),
	email: '',
	changeEmail: (pas) =>
		set(() => ({
			email: pas,
		})),
});

store = persist(store, { name: 'parol' });

export const useStore = create(store);
