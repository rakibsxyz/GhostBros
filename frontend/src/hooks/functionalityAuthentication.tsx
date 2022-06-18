import axios from 'axios';
import React from 'react'
import { ApiLoginResponse, loginSchema } from '../Features/Login/login';

export default function useFunctionalityAuthentication() {

    const onLogin = React.useCallback(
        async (form: loginSchema): Promise<null> => {
            // const btnLoading = UtilsJQuery.Ladda(".login-form-submit-btn");
            // btnLoading.start?.();
            let apiUrl = "http://localhost:3333/auth/signin"

            try {
                const res = await axios.post<ApiLoginResponse>(
                    apiUrl,
                    form
                );

                if (res.status === 200) {
                    if (res.data.access_token) {
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


    const onSignUp = React.useCallback(
        async (form: loginSchema): Promise<null> => {
            // const btnLoading = UtilsJQuery.Ladda(".login-form-submit-btn");
            // btnLoading.start?.();
            let apiUrl = "http://localhost:3333/auth/signup"

            try {
                const res = await axios.post<ApiLoginResponse>(
                    apiUrl,
                    form
                );

                if (res.status === 200) {
                    if (res.data.access_token) {
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
        onLogin,
        onSignUp,

    }


}
