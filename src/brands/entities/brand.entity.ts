import { UUID } from 'crypto';

export class Brand {
  id: UUID;
  name: string;
  createdAt: number;
  updatedAt?: number;
}
