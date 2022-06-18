import React from 'react'
import { loginSchema } from './login';
import { useForm, NestedValue, SubmitHandler  } from 'react-hook-form';

type Props = {
    onSubmitForm: any
}

export default function SignUp(props: Props) {

    const { register, handleSubmit, setValue, reset } =
    useForm<loginSchema>();

    return (
        <div className="login-form">
            <div className="title">Sign Up</div>
            <div className="form">
                <form onSubmit={handleSubmit(props.onSubmitForm)}>
                    <div className="input-container">
                        <label>Email </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Company Code"
                            {...register("email")} 
                        />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Company Code"
                            {...register("password")} 
                        />
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}
