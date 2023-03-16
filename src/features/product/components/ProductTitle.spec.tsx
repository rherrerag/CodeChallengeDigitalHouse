import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ProductTitle from './ProductTitle';
import {NativeBaseProvider} from 'native-base';
import {customTheme} from '../../../constants/theme';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

describe('ProductTitle Component', () => {
  it('debería generar snapshot de componente correctamente', async () => {
    render(
      <NativeBaseProvider theme={customTheme} initialWindowMetrics={inset}>
        <ProductTitle title="Titulo de Prueba" />
      </NativeBaseProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
