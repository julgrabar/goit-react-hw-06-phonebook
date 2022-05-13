import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const init = {
    items: [],
    filter: ""
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: init,
  reducers: {
    addContact({items}, action) {
      items.push(action.payload)
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    filterContacts(state, action){
        state.filter=action.payload;
    }
  },
});


const persistConfig = {
    key: "contacts",
    storage,
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer)


export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;