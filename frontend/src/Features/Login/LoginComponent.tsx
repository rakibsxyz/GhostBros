import React from 'react'
import { loginSchema } from './login';
import { useForm } from "react-hook-form";

type Props = {
    onSubmitForm: any
}
export default function LoginComponent(props: Props) {
    const { register, handleSubmit, setValue, reset } =
    useForm<loginSchema>();

    return (
        <div className="login-form">
            <div className="title">Sign In</div>
            <div className="form">
                <form onSubmit={handleSubmit(props.onSubmitForm)}>
                    <div className="input-container">
                        <label>Username </label>
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
