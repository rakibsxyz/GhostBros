import axios from 'axios';
import React from 'react'
import { MovieSchema, PaginatedMovieResponse } from '../Features/Movie/MovieSchema';

export default function useFunctionalityMovies() {


    const onAddMovie = React.useCallback(
        async (form: MovieSchema): Promise<null> => {
            // const btnLoading = UtilsJQuery.Ladda(".login-form-submit-btn");
            // btnLoading.start?.();
            let apiUrl = "http://localhost:3333/movie/add"
            let updatedForm = {...form, rating: parseInt(form.rating)}
            try {
                const res = await axios.post<MovieSchema>(
                    apiUrl,
                    updatedForm
                );
                if (true) {
                }
                else {
                    // toast.error(res.data.message);
                }

            } catch (e: any) {
                // setErrMsg((e as Error).message);
                // toast.error(e.message);
                console.log("error", e)
            }
            // btnLoading.stop?.();
            return Promise.resolve(null);
        },
        []
    );

    const onFetchMovies = React.useCallback(
        async(): Promise<null | PaginatedMovieResponse> => {
            // const btnLoading = UtilsJQuery.Ladda(".login-form-submit-btn");
            // btnLoading.start?.();
            let apiUrl = `http://localhost:3333/movie/paginated?skip=0&take=10`
            try {
                const res = await axios.get<PaginatedMovieResponse>(
                    apiUrl,
                );


                if (res.data) {
                    return Promise.resolve(res.data);
                   
                }
                else {
                    // toast.error(res.data.message);
                }

            } catch (e: any) {
               
                console.log("error", e)
            }
            // btnLoading.stop?.();
            return Promise.resolve(null);
        },
        []
    );

  return {
    onAddMovie,
    onFetchMovies,
  }
}
