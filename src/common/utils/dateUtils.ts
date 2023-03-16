import {Movement} from '../../features/movements/interfaces/movement.interface';

const monthNames = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const filterByDate = (
  movementArray: Movement[],
  month: string,
  year: string,
) => {
  return movementArray.filter(
    element =>
      new Date(element.createdAt).getMonth() === Number(month) - 1 &&
      new Date(element.createdAt).getFullYear() === Number(year),
  );
};

export {monthNames, filterByDate};
