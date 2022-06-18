import React from 'react'
import { useForm, NestedValue, SubmitHandler } from 'react-hook-form';
import { MovieSchema } from './MovieSchema';

type Props = {
    onSubmitForm: any
}
export default function AddMovie(props: Props) {
    const { register, handleSubmit, setValue, reset } =
        useForm<MovieSchema>();
    return (
        <>
           
            <div className="login-form">
            <div>AddMovie</div>
            <div className="form">
                <form onSubmit={handleSubmit(props.onSubmitForm)}>
                    <div className="input-container">
                        <label>Name </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Company Code"
                            {...register("name")}
                        />
                    </div>
                    <div className="input-container">
                        <label>Image Url </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Company Code"
                            {...register("imageUrl")}
                        />
                    </div>
                    <div className="input-container">
                        <label>Rating</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Company Code"
                            {...register("rating")}
                        />
                    </div>
                    <div className="button-container">
                        {/* <input type="submit" />  */}
                        <button
                            type="submit"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}
