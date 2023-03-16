import {RootState} from '../../../redux';

export const selectMovements = (state: RootState) => state.movements.movements;

export const selectEarnedMovements = (state: RootState) =>
  state.movements.earnedMovements;

export const selectRedeemedMovements = (state: RootState) =>
  state.movements.redeemedMovements;
