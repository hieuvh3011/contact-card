import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

let scriptHostname = 'localhost';

if (__DEV__) {
  const {scriptURL} = NativeModules.SourceCode;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

Reactotron.clear();
const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'CarWash React Native',
    host: scriptHostname,
  })
  .use(reactotronRedux())
  .useReactNative({})
  .connect();

// eslint-disable-next-line no-console
console.tron = __DEV__ ? Reactotron : {log: () => {}};

export default reactotron;
