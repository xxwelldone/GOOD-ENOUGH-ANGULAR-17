import { Igenre } from './iGenre';

export interface Imovie {
  backdrop_path: string;
  id: number;
  title: string;
  name: string;
  original_title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  popularity: number;
  origin_country: string[];
  genres: Igenre[];
  release_date: Date;
  vote_average: number;
  vote_count: number;
}
