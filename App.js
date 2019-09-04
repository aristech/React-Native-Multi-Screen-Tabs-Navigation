/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {StatusBar} from 'react-native';
import {device} from './constants';

import TabNavigator from './navigation/TabNavigator';

const App = () => {
  const [theme, setTheme] = useState('light');
  const updateTheme = themeType => {
    setTheme(themeType);
  };
  const iOSStatusType = theme === 'light' ? 'dark-content' : 'light-content';
  return (
    <Fragment>
      <StatusBar barStyle={device.iOS ? iOSStatusType : 'light-content'} />

      <TabNavigator
        screenProps={{
          updateTheme,
        }}
        theme={theme}
      />
    </Fragment>
  );
};

export default App;
