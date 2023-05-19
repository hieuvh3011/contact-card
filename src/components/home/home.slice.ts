// import {RootState} from '@app/redux/store.redux';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Contact} from '@app/entities/contact.entities';
import {fakeData} from '@app/repository/fake.data';
import {uuid} from 'uuidv4';

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
      const newContact = action.payload;
      newContact.id = uuid();
      state.listContact.push(newContact);
    },
    deleteItem: (state, action: PayloadAction<Contact>) => {
      const index = state.listContact.findIndex(
        item => item.id === action.payload.id,
      );
      state.listContact.splice(index, 1);
    },
  },
});

export const {addItem, deleteItem} = contactSlice.actions;
export const selectContactList = (state: HomeState) => state.listContact;

export default contactSlice.reducer;
