// import {RootState} from '@app/redux/store.redux';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Contact} from '@app/entities/contact.entities';
import {fakeData} from '@app/repository/fake.data';

interface HomeState {
  listContact: Array<Contact>;
}

const initialState: HomeState = {
  listContact: fakeData,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Contact>) => {
      state.listContact = [...state.listContact, action.payload];
    },
    deleteItem: (state, action: PayloadAction<Contact>) => {
      const index = state.listContact.findIndex(
        item => item.id === action.payload.id,
      );
      const newList = state.listContact.splice(index, 1);
      state.listContact = newList;
    },
  },
});

export const {addItem} = contactSlice.actions;
export const selectContactList = (state: HomeState) => state.listContact;

export default contactSlice.reducer;
