import useFunctionalityMovies from '../../hooks/functionalityMovies'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
import { MovieSchema } from './MovieSchema'

export default function Movies() {

    const { onAddMovie } = useFunctionalityMovies()
    const addMovie = (form: MovieSchema) => {
        onAddMovie(form)
        .then(r=>{

        })
        .catch((e)=>{
            
        })
    }

  

    return (
        <>
            <div className="movie" >
                <AddMovie onSubmitForm={addMovie} />
            </div>
            <div>
                <MovieList />
            </div>

        </>
    )
}
