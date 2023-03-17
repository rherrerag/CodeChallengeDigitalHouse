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
import ProductDetail from './ProductDetail';
import {store} from '../../../redux';
import mockFetch from 'jest-fetch-mock';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {customTheme} from '../../../constants/theme';
import {Movement} from '../../movements/interfaces/movement.interface';

const movementMock: Movement = {
  createdAt: '2023-03-11T04:35:35.259Z',
  product: 'Fantastic Granite Bacon',
  points: 42416,
  image: 'https://loremflickr.com/640/480/technics',
  is_redemption: false,
  id: 3,
};

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

const ProductDetailFactory = async () => {
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
          <ProductDetail />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>,
  );
  await waitFor(() =>
    expect(screen.getAllByTestId('accept-button')).toBeTruthy(),
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
    useRoute: () => ({
      params: {
        item: movementMock,
      },
    }),
  };
});

describe('Product Detail Container', () => {
  beforeEach(() => {
    mockFetch.enableMocks();
    mockFetch.resetMocks();
    mockedDispatch.mockClear();
  });

  it('debería generar snapshot de container correctamente', async () => {
    await ProductDetailFactory();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('debería navegar a movimientos al presionar Aceptar', async () => {
    await ProductDetailFactory();
    await act(() => {
      fireEvent(screen.getByTestId('accept-button'), 'press');
    });
    expect(screen.findAllByText('TUS PUNTOS')).toBeTruthy();
  });
});
