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
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {customTheme} from '../../../constants/theme';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

const MovementsFactory = async () => {
  mockFetch.mockResponse(req => {
    if (req.url.includes('products')) {
      return Promise.resolve(JSON.stringify(responseOK.data));
    }

    return Promise.reject(new Error('not mapped url'));
  });
  render(
    <Provider store={store}>
      <NativeBaseProvider theme={customTheme} initialWindowMetrics={inset}>
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

const mockedDispatch = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

describe('Movements Container', () => {
  beforeEach(() => {
    mockFetch.enableMocks();
    mockFetch.resetMocks();
    mockedDispatch.mockClear();
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

  it('debería encontrar movimiento en Flatlist por id y navegar a pantalla de detalle', async () => {
    await MovementsFactory();
    await act(() => {
      fireEvent(screen.getByTestId('movement-2'), 'press');
    });
    expect(screen.findAllByText('Recycled Plastic Tuna')).toBeTruthy();
  });
});
