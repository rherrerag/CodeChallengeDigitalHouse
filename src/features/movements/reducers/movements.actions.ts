import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Movement} from '../interfaces/movement.interface';
import {MovementService} from '../services/movements.service';

export const fetchMovementsData = createAsyncThunk<Movement[]>(
  'movements/fetchMovementsData',
  MovementService.getAll,
);

export const setEarnedMovements = createAction<Movement[] | null>(
  'movements/setEarnedMovement',
);

export const setRedeemedMovements = createAction<Movement[] | null>(
  'movements/RedeemeddMovement',
);
