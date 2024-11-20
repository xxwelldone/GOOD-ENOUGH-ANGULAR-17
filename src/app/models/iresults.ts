import { Imovie } from './Imovie';

export interface iResults {
  page: number;
  results: Imovie[];
  total_pages: number;
  total_results: number;
}
