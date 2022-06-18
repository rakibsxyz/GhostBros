import React from 'react'
import MovieCard from './MovieCard'

export default function MovieContainer() {
    return (
        <div className="container-movie">
            {
                // movies.map((movie, index) => <MovieCard data={movie}
                //                                          key={index}/>)
            }
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    )
}
