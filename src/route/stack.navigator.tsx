import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@app/components/home/home.screen';
import SplashScreen from '@app/components/splash/splash.screen';
import {RootStackParamList} from './type.navigator';
import CardDetailScreen from '@app/components/card_detail/card_detail.screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <Stack.Screen name={'Splash'} component={SplashScreen} />
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'CardDetail'} component={CardDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
