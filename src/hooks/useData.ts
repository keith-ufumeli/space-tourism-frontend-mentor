import type { SpaceTourismData } from '@/types';
import data from '@/data/data.json';

export function useData(): SpaceTourismData {
  return data as SpaceTourismData;
}

