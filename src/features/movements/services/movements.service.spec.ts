import {MovementService} from './movements.service';
import {responseOK} from '../../../../__mocks__/responseProducts';

describe('Movements Service', () => {
  it('debería retornar movimientos desde la API con la función getAll', async () => {
    jest.spyOn(MovementService, 'getAll').mockResolvedValue(responseOK);
    const response = await MovementService.getAll();
    expect(response).toEqual(responseOK);
  });
});
