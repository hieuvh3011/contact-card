// import {RootState} from '@app/redux/store.redux';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ContactEntities} from '@app/entities/contact.entities';
import {getGeneratedData} from '@app/repository/home.repository';
import {setLoading} from '@app/redux/system/system.slice';
import {Alert} from 'react-native';
import strings from '@app/i18n';
interface HomeState {
  listContact: Array<ContactEntities>;
}

const initialState: HomeState = {
  listContact: [],
};

export const generateContact = createAsyncThunk(
  'generate_contact',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(
      setLoading({isLoading: true, textLoading: strings.home.fetching_data}),
    );
    const data: Array<ContactEntities> = await getGeneratedData().catch(
      error => {
        thunkAPI.dispatch(setLoading({isLoading: false, textLoading: ''}));
        Alert.alert(
          strings.common.error,
          error.message || strings.home.undefined_error,
        );
        return [];
      },
    );
    thunkAPI.dispatch(setLoading({isLoading: false, textLoading: ''}));
    // thunkAPI.dispatch(addList(data));
    return data;
  },
);

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<Array<ContactEntities>>) => {
      state.listContact.concat(action.payload);
    },
    addItem: (state, action: PayloadAction<ContactEntities>) => {
      const newContact = action.payload;
      const uniqueId =
        Date.now().toString(36) + Math.random().toString(36).substring(2);
      newContact.id = uniqueId;
      state.listContact.push(newContact);
    },
    deleteItem: (state, action: PayloadAction<ContactEntities>) => {
      const index = state.listContact.findIndex(
        item => item.id === action.payload.id,
      );
      state.listContact.splice(index, 1);
    },
    deleteAll: state => {
      state.listContact = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(generateContact.fulfilled, (state, action) => {
      state.listContact = action.payload;
    });
  },
});

export const {addItem, deleteItem, addList, deleteAll} = contactSlice.actions;
export const selectContactList = (state: HomeState) => state.listContact;

export default contactSlice.reducer;
