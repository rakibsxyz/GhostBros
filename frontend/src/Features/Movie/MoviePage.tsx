import React from 'react'
import AddMovie from './AddMovie'
import MovieList from './MovieList'

export default function Movies() {

    const onAddMovie = () => {

    }
    return (
        <>
            <div className="movie" >
                <AddMovie onSubmitForm={onAddMovie} />
            </div>
            <div>
                <MovieList />
            </div>

        </>
    )
}
