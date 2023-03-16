import {Movement} from '../interfaces/movement.interface';

/**
 * Returns the sum of points of a Movement array
 * @param {number} movementArray A Movement type of array.
 */
const sumPoints = (movementArray: Movement[]) => {
  const points = movementArray?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.points,
    0,
  );
  return points;
};

export {sumPoints};
