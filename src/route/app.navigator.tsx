import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppStack from './stack.navigator';

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
