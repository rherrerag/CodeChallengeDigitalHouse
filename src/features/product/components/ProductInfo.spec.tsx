import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ProductInfo from './ProductInfo';
import {NativeBaseProvider} from 'native-base';
import {customTheme} from '../../../constants/theme';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

describe('ProductInfo Component', () => {
  it('debería generar snapshot de componente correctamente', async () => {
    render(
      <NativeBaseProvider theme={customTheme} initialWindowMetrics={inset}>
        <ProductInfo
          productDetailTitle="Titulo mock"
          pointsSummaryTitle="Acumulados mock"
          pointsSummary="5000 puntos"
          dateFormatted="Comprado el 6 de Marzo, 2023"
        />
      </NativeBaseProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
