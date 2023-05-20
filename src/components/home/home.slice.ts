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
      const newContact = action.payload;
      const uniqueId =
        Date.now().toString(36) + Math.random().toString(36).substring(2);
      newContact.id = uniqueId;
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
