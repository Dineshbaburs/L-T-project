import { Room } from './room.model';
export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  rooms: Room[];
}
