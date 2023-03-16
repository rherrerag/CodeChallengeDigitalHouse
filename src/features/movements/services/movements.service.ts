import {API_URL} from '../../../constants/env';
import {Movement} from '../interfaces/movement.interface';

const getAll = async (): Promise<Movement[]> =>
  await fetch(`${API_URL}/products`).then(response => response.json());

export const MovementService = {
  getAll,
};
