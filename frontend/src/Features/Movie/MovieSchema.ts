export type MovieSchema = {
    name: string;
    posterUrl: string,
    rating: string
  };

export type MovieResponseSchema = {
  id: number,
  name: string,
  posterUrl?: string,
  rating?: number

}

export type PaginatedMovieResponse = {
  count: number,
  data: MovieResponseSchema[]
}

