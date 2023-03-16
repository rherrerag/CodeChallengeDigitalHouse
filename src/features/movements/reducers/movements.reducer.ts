import {createReducer} from '@reduxjs/toolkit';
import {Movement} from '../interfaces/movement.interface';
import {
  fetchMovementsData,
  setEarnedMovements,
  setRedeemedMovements,
} from './movements.actions';

interface MovementState {
  movements: Movement[];
  earnedMovements: Movement[] | null;
  redeemedMovements: Movement[] | null;
}

const initialState: MovementState = {
  movements: [],
  earnedMovements: [],
  redeemedMovements: [],
};

export const movementsReducer = createReducer(initialState, builder => {
  builder.addCase(fetchMovementsData.pending, state => ({
    ...state,
    movements: [],
  }));

  builder.addCase(fetchMovementsData.rejected, state => ({
    ...state,
    movements: [],
  }));

  builder.addCase(fetchMovementsData.fulfilled, (state, action) => ({
    ...state,
    movements: action.payload,
  }));

  builder.addCase(setEarnedMovements, (state, action) => ({
    ...state,
    earnedMovements: action.payload,
  }));

  builder.addCase(setRedeemedMovements, (state, action) => ({
    ...state,
    redeemedMovements: action.payload,
  }));
});
