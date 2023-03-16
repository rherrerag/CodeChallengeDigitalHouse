import {filterByDate} from './dateUtils';
import {responseOK} from '../../../__mocks__/responseProducts';

describe('Date Utils', () => {
  it('debería retornar un arreglo vacío para una fecha que no existe en la data del mock', async () => {
    expect(filterByDate(responseOK.data, '2', '2024')).toEqual([]);
  });
});
