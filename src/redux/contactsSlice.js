import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      items:[],
      filter: '',
    },
    reducers: {
    addContacts(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, deleteContacts, changeFilter } = contactsSlice.actions;