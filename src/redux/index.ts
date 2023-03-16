import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {movementsReducer} from '../features/movements/reducers/movements.reducer';

export const store = configureStore({
  reducer: {
    movements: movementsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
