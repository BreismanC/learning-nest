import { UUID } from 'crypto';

export interface Car {
  id: UUID;
  brand: string;
  model: string;
}
