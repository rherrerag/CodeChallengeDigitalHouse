import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './navigation';
import {Provider} from 'react-redux';
import {store} from './redux';
import {customTheme} from './constants/theme';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={customTheme}>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
