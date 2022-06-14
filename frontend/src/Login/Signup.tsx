import React from 'react'
import { loginSchema } from './login';


type Props = {
    onSubmitForm: any
}
export default function SignUp(props: Props) {

    // const { register, handleSubmit, setValue, reset } =
        // useForm<loginSchema>();

    return (
        <div className="login-form">
            <div className="title">Sign Up</div>
            <div className="form">
                <form onSubmit={props.onSubmitForm}>
                    <div className="input-container">
                        <label>Username </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Retype Email"
                            id="email"
                            // {...register("email")} 
                            // defaultValue={step5Data?.retypeEmail}
                            // onBlur={(e) => {
                            //     setRetypeEmailForMatch(e.target.value);
                            //     confirmEmail(e);
                            // }}
                        />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        {/* <input type="password" name="pass" required /> */}
                        {/* {renderErrorMessage("pass")} */}
                    </div>
                    <div className="button-container">
                        <button
                            type="submit"
                            className="btn btn-primary text-uppercase mx-3"
                        >
                            Filter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
