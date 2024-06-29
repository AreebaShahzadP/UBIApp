import React from 'react';
import AppNavigator from './src/navigation/app-navigator';
import {MenuProvider} from 'react-native-popup-menu';

const App = () => {
  return (
    <MenuProvider>
      <AppNavigator />
    </MenuProvider>
  );
};

export default App;
