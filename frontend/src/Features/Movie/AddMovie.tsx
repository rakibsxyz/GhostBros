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
                <div>Add Movie</div>
                <div className="form">
                    <form onSubmit={handleSubmit(props.onSubmitForm)}>
                        <div className="input-container">
                            <label>Name </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter a movie name"
                                {...register("name")}
                            />
                        </div>
                        <div className="input-container">
                            <label>Poster Url </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter poster link"
                                {...register("posterUrl")}
                            />
                        </div>
                        <div className="input-container">
                            <label>Rating</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Rating 1 to 5"
                                defaultValue={1}
                                min={1}
                                max={5}
                                {...register("rating")}
                            />
                        </div>
                        <div className="button-container">
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
