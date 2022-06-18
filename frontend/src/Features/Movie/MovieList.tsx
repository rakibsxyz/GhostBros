import React, { useEffect, useState } from 'react'
import useFunctionalityMovies from '../../hooks/functionalityMovies'
import MovieCard from './MovieCard'
import { MovieResponseSchema, PaginatedMovieResponse } from './MovieSchema'

export default function MovieList() {
  const { onFetchMovies } = useFunctionalityMovies()
  const [movieList, setMovieList] = useState<MovieResponseSchema[]>()

  useEffect(() => {
    onFetchMovies()
    .then(r=>{
      setMovieList(r?.data)
    })
}, [])

  return (
    // <MovieContainer />
    <div className="container-movie">
      {
        movieList?.map((movie, index) => <MovieCard movie= {movie} />)
      }
      {/* <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard /> */}
    </div>
  )
}
