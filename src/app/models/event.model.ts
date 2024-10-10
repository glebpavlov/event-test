export interface AppEvent {
  id: number;
  name: string;
  description: string;
  location: string;
  eventType: 'sport' | 'music';
  participants?: number;
  genre?: string;
}
