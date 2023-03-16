import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './navigation';
import {Provider} from 'react-redux';
import {store} from './redux';

const theme = extendTheme({
  colors: {
    primary: {
      100: '#334FFA',
      200: '#CFD6FF',
    },
    text: {
      title: '#020202',
      subtitle: '#9B9898',
      normal: '#000000',
    },
  },
});

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
