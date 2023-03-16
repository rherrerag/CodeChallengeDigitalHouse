import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react-native';
import {responseOK} from '../../../../__mocks__/responseProducts';
import {Provider} from 'react-redux';
import Movements from './Movements';
import {store} from '../../../redux';
import mockFetch from 'jest-fetch-mock';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

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

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

jest.mock('react-native/Libraries/Lists/FlatList', () => 'FlatList');

const MovementsFactory = async () => {
  mockFetch.mockResponse(req => {
    if (req.url.includes('products')) {
      return Promise.resolve(JSON.stringify(responseOK.data));
    }

    return Promise.reject(new Error('not mapped url'));
  });
  render(
    <Provider store={store}>
      <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
        <NavigationContainer>
          <Movements />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>,
  );
  await waitFor(() =>
    expect(screen.getAllByTestId('movements-list-container')).toBeTruthy(),
  );
};

describe('Movements Container', () => {
  beforeEach(() => {
    mockFetch.enableMocks();
    mockFetch.resetMocks();
  });

  it('debería generar snapshot de container correctamente', async () => {
    await MovementsFactory();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('debería mostrar Marzo en el mes de la Card', async () => {
    await MovementsFactory();
    await act(() => {
      expect(screen.getByText('Marzo')).toBeTruthy();
    });
  });

  it('debería mostrar botón Todos al pulsar boton de Ganados', async () => {
    await MovementsFactory();
    await act(() => {
      fireEvent(screen.getByTestId('earned-points-button'), 'press');
    });
    expect(screen.getByTestId('total-points-button')).toBeTruthy();
  });

  it('debería mostrar botón Todos al pulsar boton de Canjeados', async () => {
    await MovementsFactory();
    await act(() => {
      fireEvent(screen.getByTestId('redeemed-points-button'), 'press');
    });
    expect(screen.getByTestId('total-points-button')).toBeTruthy();
  });
});
