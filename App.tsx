/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppNavigation from '@app/route/app.navigator';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://e4e256a5c3a94bf3b9015d5c9e6b9e32@o914809.ingest.sentry.io/4505192850587648',
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigation />
    </>
  );
}

export default Sentry.wrap(App);
