import axios from 'axios';
import React from 'react'
import { ApiLoginResponse, loginSchema } from '../Features/Login/login';
import { useNavigate, useLocation } from "react-router-dom";

export default function useFunctionalityAuthentication() {
    const navigate = useNavigate();

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


                if (res.data.access_token) {
                    navigate({
                        pathname: "/movie",
                    });
                  
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

                if (res.status === 201) {
                    if (res.data.access_token) {
                       
                    }
                    else {
                        // toast.error(res.data.message);
                    }
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
        onLogin,
        onSignUp,

    }


}
function useHistory() {
    throw new Error('Function not implemented.');
}

