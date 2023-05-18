import {MMKV} from 'react-native-mmkv';
import {Storage} from 'redux-persist';
import {getUniqueId} from 'react-native-device-info';
import Config from 'react-native-config';

// TODO: Add STORE_KEY from config to improve security
export const storage = new MMKV({
  id: `storage-encrypted-${getUniqueId()}`,
  encryptionKey: `Contact-Card-${getUniqueId()}-${Config.STORAGE_ENCRYPT_KEY}`,
});

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

//----------------------------------------------------------------------------------------
// Reactotron stogare, only for development
//----------------------------------------------------------------------------------------
export const storageReactotron = new MMKV({
  id: `storage-reacotron-${getUniqueId()}`,
});

export const reactotronStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};
