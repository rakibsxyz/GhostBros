import axios from 'axios';
import React from 'react'
import { MovieSchema } from '../Features/Movie/MovieSchema';

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
                    // navigate({
                    //     pathname: "/movie",
                    // });
                    // StorageAuth.AccessToken = res.data.data.token;
                    // batch(() => {
                    //     dispatch(ActionAuth.SetIsLoggedIn(true));
                    //     dispatch(ActionAuth.SetSessionId(res.data.data.sessionId));
                    //     dispatch(ActionAuth.SetProfileData(res.data.data.profile));
                    //     //dispatch(ActionAuth.SetMenuSettingsData(res.data.menuSettings));
                    // });

                    // if (!!data.previousPath) history.push(data.previousPath);
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

  return {
    onAddMovie
  }
}
