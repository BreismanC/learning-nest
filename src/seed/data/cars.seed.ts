import { randomUUID as uuid } from 'crypto';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  { id: uuid(), brand: 'Toyota', model: 'Corolla' },
  { id: uuid(), brand: 'Honda', model: 'Civic' },
  { id: uuid(), brand: 'Jeep', model: 'Cherokee' },
];
