import {
  fetchMovementsData,
  setEarnedMovements,
  setRedeemedMovements,
} from './movements.actions';
import {movementsReducer} from './movements.reducer';
import {responseOK} from '../../../../__mocks__/responseProducts';

describe('Monvements Reducer', () => {
  it('debería retornar el estado inicial del store', () => {
    expect(movementsReducer(undefined, {type: undefined})).toEqual({
      movements: [],
      earnedMovements: [],
      redeemedMovements: [],
    });
  });

  it('no debería llebar la lista de movimientos con acción rejected', () => {
    const action = {type: fetchMovementsData.rejected};
    const state = movementsReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        movements: [],
      }),
    );
  });

  it('debería poblar la lista de movimientos con la acción fulfilled', () => {
    const action = {
      type: fetchMovementsData.fulfilled,
      payload: responseOK.data,
    };
    const state = movementsReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        movements: responseOK.data,
      }),
    );
  });

  it('debería agregar movimientos ganados al state', () => {
    const state = movementsReducer(
      undefined,
      setEarnedMovements(responseOK.data),
    );

    expect(state).toEqual(
      expect.objectContaining({
        earnedMovements: responseOK.data,
      }),
    );
  });

  it('debería agregar movimientos canjeados al state', () => {
    const state = movementsReducer(
      undefined,
      setRedeemedMovements(responseOK.data),
    );

    expect(state).toEqual(
      expect.objectContaining({
        redeemedMovements: responseOK.data,
      }),
    );
  });
});
