// import {RootState} from '@app/redux/store.redux';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Contact} from '@app/entities/contact.entities';
import {getGeneratedData} from '@app/repository/home.repository';
import {setLoading} from '@app/redux/system/system.slice';
import {Alert} from 'react-native';
import {fakeData} from '@app/repository/fakedata';
interface HomeState {
  listContact: Array<Contact>;
}

const initialState: HomeState = {
  listContact: fakeData,
};

export const generateContact = createAsyncThunk(
  'generate_contact',
  async (_, thunkAPI) => {
    console.log('vao day');
    thunkAPI.dispatch(
      setLoading({isLoading: true, textLoading: 'Fetching data'}),
    );
    const data: Array<Contact> = await getGeneratedData().catch(error => {
      thunkAPI.dispatch(setLoading({isLoading: false, textLoading: ''}));
      Alert.alert(
        'Error',
        error.message ||
          'An undefined error happened, please try again after 1 minute',
      );
      return [];
    });
    thunkAPI.dispatch(setLoading({isLoading: false, textLoading: ''}));
    // thunkAPI.dispatch(addList(data));
    return data;
  },
);

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<Array<Contact>>) => {
      state.listContact.concat(action.payload);
    },
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
  extraReducers(builder) {
    builder.addCase(generateContact.fulfilled, (state, action) => {
      state.listContact = action.payload;
    });
  },
});

export const {addItem, deleteItem, addList} = contactSlice.actions;
export const selectContactList = (state: HomeState) => state.listContact;

export default contactSlice.reducer;
