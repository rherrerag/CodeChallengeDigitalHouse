import {sumPoints} from './pointUtils';
import {responseOK} from '../../../../__mocks__/responseProducts';

describe('Point Utils', () => {
  it('debería retornar correctamente la suma de los elementos del mock de movimientos', async () => {
    expect(sumPoints(responseOK.data)).toEqual(322494);
  });
});
